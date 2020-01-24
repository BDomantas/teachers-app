import { OptionalProps, PayloadWithParams, PayloadWithPromises } from '@Utils/types';

type FormPayloadType = OptionalProps<PayloadWithParams> & PayloadWithPromises;

export function parserResponseError<T extends FormPayloadType>(e) {
  let errorData: Partial<Exclude<T, FormPayloadType>> & { _error ?: string };
  if (e.response) {
    const {
      non_field_errors,
      message, detail,
      ...fieldMessages } = e.response; // FixMe form fields 'message' and 'detail' will not get dedicated messages.
    errorData = fieldMessages;
    if (non_field_errors) {
      errorData._error = non_field_errors;
    } else if (detail) {
      errorData._error = detail;
    } else if (Array.isArray(e.response)) {
      errorData._error = e.response;
    } else if (e.message) {
      errorData._error = message;
    }
  } else {
    errorData = {};
    errorData._error = e.message;
  }

  return errorData;
}

export function getErrorMessage(e: any): string {
  return e._error || e.errors && e.errors._error || '';
}

export function getMessageFromErrorResponse(e) {
  const { non_field_errors, message, detail } = e.response;
  let errorMessage: string = '';
  if (non_field_errors) {
    errorMessage = non_field_errors;
  } else if (detail) {
    errorMessage = detail;
  } else if (e.message) {
    errorMessage = message;
  }
  if (Array.isArray(errorMessage)) {
    errorMessage = errorMessage[ 0 ];
  }
  return errorMessage;

}
