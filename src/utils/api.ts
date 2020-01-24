import AsyncStorage from '@react-native-community/async-storage';

import { AppKeys } from '@Config/constants';
import Config from '@Config/envConfig';

import { getAttachmentFilenameFromHeader } from '@Utils/files';

const API_URL = Config.API_URL || '';

export class FetchError extends Error {
  constructor(message: string, response?: object, status?: number) {
    super(message);
    this.message = String(message);
    this.response = response;
    this.status = status;
  }
  response?: object;
  status?: number;
}

async function getDefaultHeaders(isUpload) {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (isUpload) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
  }

  const token = await AsyncStorage.getItem(AppKeys.userTokenKey);
  if (token) {
    headers[ 'Authorization' ] = `Token ${token}`;
  }

  return headers;
}

async function addHeadersAndConfigurations(options: object, isUpload: boolean): Promise<RequestInit> {

  return {
    headers: await getDefaultHeaders(isUpload),
    mode: 'cors',
    ...options,
  };
}

function handleFile(response) {
  return response.blob().then((blob) => {
    return { file: blob, fileName: getAttachmentFilenameFromHeader(response.headers.get('Content-Disposition')) };
  });
}

function processResponse(response, isFile: boolean = false) {
  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.indexOf('application/json') >= 0;

  if (response.status >= 200 && response.status < 300) {
    return isJson ? Promise.resolve(
      response.json()) : isFile ? Promise.resolve(handleFile(response)) : Promise.resolve(response.text(),
      );
  }

  const error = new FetchError(
    response.statusText || response.status,
    { message: 'Unexpected Error' }, response.status);
  if (isJson) {
    return response.json().then((json: any) => {
      error.response = json;
      error.status = response.status;
      throw error;
    });
  }
  throw error;
}

async function callApi(url: string, options: object, isFile: boolean = false, isUpload: boolean = false) {
  const opt: RequestInit = await addHeadersAndConfigurations(options, isUpload);
  return fetch(`${API_URL}${url}`, opt).then((response) => {
    return processResponse(response, isFile);
  });
}

export function callGet(url: string) {
  return callApi(url, {
    method: 'GET',
  });
}

export function callPost(url: string, data: object) {
  return callApi(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function callUpdate(url: string, data: object) {
  return callApi(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function callPatch(url: string, data: object) {
  return callApi(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function callDelete(url: string) {
  return callApi(url, {
    method: 'DELETE',
  });
}
