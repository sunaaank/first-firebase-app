export default function mergeReducers(reducers) {
  return function (state, action) {
    if (!state) {
      return reducers.reduce(
        (acc, cur) => ({ ...acc, ...cur(state, action) }),
        {}
      );
    } else {
      let nextState = state;
      for (const cur of reducers) {
        nextState = cur(nextState, action);
      }
      return nextState;
    }
  };
}
