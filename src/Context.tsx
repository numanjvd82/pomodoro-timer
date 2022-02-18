import { createContext, useReducer, useContext } from 'react';
import reducer, { ActionType, Store } from './reducer';

export type Dispatch = (action: ActionType) => void;

const initialState: Store = {
  time: {
    minutes: 25,
    seconds: 0,
  },
  open: false,
};

interface ContextType {
  state: Store;
  dispatch: Dispatch;
}

const TimerContext = createContext<ContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export function useTimerContext() {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error('useTimerContext must be used within a TimerProvider');
  }
  return context;
}
