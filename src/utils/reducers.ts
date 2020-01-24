import * as dotProp from 'dot-prop-immutable';
import { Action, AsyncActionCreators, Failure } from 'typescript-fsa';

// Paginated reducer
export const paginatedItemsReducerInitialState = {
  items: [],
  isFetching: true,
  count: 0,
  currentPage: 0,
  totalPages: 0,
  offset: 0,
};

export const paginatedItemsReducer = <T>(
  actionType: AsyncActionCreators<{}, T, {}>, stateName: string, modifyResult?: (items: T, state) => any) => {

  return {
    [ actionType.started.type ]: (state: any, action) => {
      let newState = dotProp.set(state, `${stateName}.isFetching`, true);
      newState = dotProp.set(newState, `${stateName}.count`, 0);
      newState = dotProp.set(newState, `${stateName}.currentPage`, 0);
      newState = dotProp.set(newState, `${stateName}.totalPages`, 0);
      newState = dotProp.set(newState, `${stateName}.offset`, 0);
      newState = dotProp.set(newState, `${stateName}.offset`, 0);
      if (action.payload._query && action.payload._query.page === 0) {
        newState = dotProp.set(newState, `${stateName}.items`, []);
      }
      return newState;
    },
    [ actionType.done.type ]: (state, action: any) => {
      const { result } = action.payload;
      const items = modifyResult ? modifyResult(result, state) : result.items;
      let newState = dotProp.set(state, `${stateName}.isFetching`, false);
      newState = dotProp.set(newState, `${stateName}.count`, result.count);
      newState = dotProp.set(newState, `${stateName}.currentPage`, result.currentPage);
      newState = dotProp.set(newState, `${stateName}.totalPages`, result.totalPages);
      newState = dotProp.set(newState, `${stateName}.offset`, result.offset);
      newState = dotProp.set(
        newState, `${stateName}.items`,
        result.currentPage ? [ ...state[ stateName ].items, ...items ] : items);
      return newState;
    },
    [ actionType.failed.type ]: (state) => {
      return dotProp.set(state, `${stateName}.isFetching`, false);
    },
  };
};

// Single item reducer
export const singleItemReducerInitialState = {
  item: null,
  isFetching: true,
};

export const singleItemReducer = (actionType: AsyncActionCreators<{}, any, {}>, stateName: string) => {
  return {
    [ actionType.started.type ]: (state: any) => {
      return dotProp.set(state, `${stateName}.isFetching`, true);
    },
    [ actionType.done.type ]: (state, action: any) => {
      return dotProp.set(state, stateName, { isFetching: false, item: action.payload.result });
    },
    [ actionType.failed.type ]: (state) => {
      return dotProp.set(state, `${stateName}.isFetching`, false);
    },
  };
};

// Multiple items reducer
export const multipleItemsReducerInitialState = {
  list: [],
  isFetching: true,
};

export const multipleItemsReducer = (actionType: AsyncActionCreators<{}, any, {}>, stateName: string) => {
  return {
    [ actionType.started.type ]: (state: any) => {
      return dotProp.set(state, `${stateName}.isFetching`, true);
    },
    [ actionType.done.type ]: (state, action: any) => {
      return dotProp.set(state, stateName, { isFetching: false, list: action.payload.result });
    },
    [ actionType.failed.type ]: (state) => {
      return dotProp.set(state, `${stateName}.isFetching`, false);
    },
  };
};

export const loadItemByIdReducer = <State, Params, Result, Error>(
  actionType: AsyncActionCreators<Params, Result, Error>, stateName: string, idKey: string = 'id') => {
  return {
    [ actionType.started.type ]: (state: State, action: Action<Params>) => {
      const id = action.payload[ idKey ];
      let item = state[ stateName ][ id ];
      if (!item) {
        item = {
          item: null,
          isFetching: true,
        };
      }
      return dotProp.set(state, `${stateName}.${id}`, item);
    },
    [ actionType.done.type ]: (state, action: any) => {
      const id = action.payload.params[ idKey ];
      return dotProp.set(state, `${stateName}.${id}`, {
        isFetching: false,
        item: action.payload.result,
      });
    },
    [ actionType.failed.type ]: (state: any, action: Action<Failure<Params, Error> >) => {
      const id = action.payload[ idKey ];
      return dotProp.set(state, `${stateName}.${id}`, {
        isFetching: false,
        item: null,
      });
    },
  };
};
