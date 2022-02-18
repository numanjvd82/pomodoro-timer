export interface Store {
  time: {
    minutes: number;
    seconds: number;
  };
  open: boolean;
}

export type ActionType =
  | { type: 'SET_MINUTES'; payload: number }
  | { type: 'SET_SECONDS'; payload: number }
  | { type: 'SET_SIDEBAR' };

const reducer = (state: Store, action: ActionType): Store => {
  switch (action.type) {
    case 'SET_MINUTES':
      return {
        ...state,
        time: {
          ...state.time,
          minutes: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
