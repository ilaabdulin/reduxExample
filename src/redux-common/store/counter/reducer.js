const initialState = {
  count: 10,
  data: null,
  incrementLoading: false
};

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

export const counter = createReducer(initialState, {
  INCREMENT_START: (state, action) => ({
    ...state,
    incrementLoading: true
  }),
  INCREMENT_SUCCESS: (state, action) => ({
    ...state,
    count: state.count + 10,
    incrementLoading: false
  }),
  FIXED_DATA: state => ({
    ...state,
    count: 10
  }),
  DECREMENT: state => ({
    ...state,
    count: state.count - 1
  }),
  RESET: (state, action) => ({
    ...state,
    count: 0,
    data: null
  })
});
