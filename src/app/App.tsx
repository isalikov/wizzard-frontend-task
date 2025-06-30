import { FinalScreen, FormScreen, WelcomeScreen } from '@app/components/screens';
import { StyledAppContainer } from '@app/styled';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, Modal, type ModalRef } from '@lib/components';
import { defaultTheme } from '@lib/theme';

import { useEffect, useMemo, useReducer, useRef } from 'react';

import { getQuestionsList } from './api';
import { AppContext, appInitialState, reducer } from './state';

const App = () => {
  const [state, dispatch] = useReducer(reducer, appInitialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const isLoading = useMemo(() => {
    return state.fetchingQuestions !== 'idle' && state.fetchingQuestions === 'pending';
  }, [state.fetchingQuestions]);

  const isWizardComplete = useMemo(() => {
    return state.step > 0 && state.step === state.questionsGroups.size;
  }, [state.step, state.questionsGroups]);

  const modalRef = useRef<ModalRef>(null);
  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const fetchQuestions = async () => {
    dispatch({ type: 'FETCHING_QUESTIONS_START' });

    try {
      const payload = await getQuestionsList();
      dispatch({ type: 'FETCHING_QUESTIONS_SUCCESS', payload });
    } catch (error: unknown) {
      dispatch({ type: 'FETCHING_QUESTIONS_ERROR', payload: error });
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // TODO: loading state is not yet in acceptance criteria
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContext value={value}>
        <GlobalStyles />
        <StyledAppContainer>
          <WelcomeScreen onOpen={handleOpenModal} />
        </StyledAppContainer>

        <Modal ref={modalRef}>
          {isWizardComplete && <FinalScreen onClose={() => {}} />}
          {!isWizardComplete && <FormScreen />}
        </Modal>
      </AppContext>
    </ThemeProvider>
  );
};

export default App;
