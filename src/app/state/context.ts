import { appInitialState } from '@app/state/constants';

import { createContext } from 'react';

import { ContextState } from './types';

export const AppContext = createContext<ContextState>({
  state: appInitialState,
  dispatch: () => {},
});
