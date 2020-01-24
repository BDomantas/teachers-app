import { ConnectedComponentClass } from 'react-redux';

export type MapT<V> = { [ key: string ]: V };
export type StringStringMapT = MapT<string>;
export type Optional<T> = T | undefined;
export type BindActionToPromiseActionType<P = {}> = (values: P) => Promise<any>;
export type URLParameterMapT = MapT<URLParamValue>;
export type URLParamValue = string | number;
export type QueryT = MapT<URLParamValue | URLParamValue[]>;
export type HOC<PWrapped, PHoc> = React.ComponentClass<PWrapped & PHoc>
                                | React.FunctionComponent<PWrapped & PHoc>
                                | ConnectedComponentClass<any, any>;

export type PayloadWithPromises = {
  resolve: (param: any) => void,
  reject: (param: any) => void,
};

export type OptionalProps<T> = {
  [ P in keyof T ]?: Optional<T[ P ]>;
};
export type PayloadWithParams<P = URLParameterMapT, R = any, Q = QueryT> = {
  // Extra params for payload
  _params?: P,
  // Params for current action
  _request?: R,
  // Params for url query
  _query?: Q,
};

export interface LoadableItem<T = any> {
  item: T | null;
  isFetching: boolean;
}
export interface LoadableItemWithValue<T> extends LoadableItem  {
  item: T;
}

export type LoadableItems<T = any> = {
  list: T[],
  isFetching: boolean,
};

export interface LoadableById<T> {
  item: T | null;
  isFetching: boolean;
}

export type PaginatedItems<T = any> = {
  items: T[],
  isFetching: boolean,
  count: number,
  currentPage: number,
  offset: number,
  totalPages: number,
};

export interface ActionErrorType {
  error: { status: number, response: object };
}

// Base types
export type NavigationScreen = {
  componentId: string;
};
export type WithInputEvents = {
  onInputFocus?: () => void;
  onInputBlur?: () => void;
};

export type WizardFormStep = {
  currentStep: number;
  totalSteps: number;
};
// Errors
export type NonFieldErrors = {
  response: {
    non_field_errors: string[],
    detail: string;
  },
};
