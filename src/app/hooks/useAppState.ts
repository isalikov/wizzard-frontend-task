import { AppContext } from '@app/state';

import { use, useMemo } from 'react';

export const useAppState = () => {
  const { state, dispatch } = use(AppContext);

  const isFirstStep = useMemo(() => {
    return state.step === 0;
  }, [state.step]);

  const isLastStep = useMemo(() => {
    return state.step > 0 && state.step === state.questionsGroups.size;
  }, [state.step, state.questionsGroups.size]);

  const steps = useMemo(() => {
    return Array.from(state.questionsGroups.keys());
  }, [state.questionsGroups]);

  return {
    ...state,
    dispatch,
    steps,
    isFirstStep,
    isLastStep,
  };
};
