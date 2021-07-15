import { useMemo, useReducer } from 'react';

function useReducerWithContext(reducer, initalState) {
  const [state, dispatch] = useReducer(reducer, initalState);
  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    []
  );
  return contextValue;
}

export default useReducerWithContext;
