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
  const modalRef = useRef<ModalRef>(null);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const isLoading = useMemo(() => {
    return state.fetchingQuestions !== 'idle' && state.fetchingQuestions === 'pending';
  }, [state.fetchingQuestions]);

  const isWizardComplete = useMemo(() => {
    return state.step > 0 && state.step === state.questionsGroups.size;
  }, [state.step, state.questionsGroups]);

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

  const handleLeaveForm = () => {
    dispatch({ type: 'RESET_STATE' });
    modalRef.current?.close();
  };

  const handleModalClose = () => {
    if (state.touched && modalRef.current?.isOpen) {
      if (confirm('Are you sure you want to leave this form?')) {
        handleLeaveForm();
      }
    } else {
      handleLeaveForm();
    }
  };

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.code == 'Escape') {
      handleModalClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, [handleEscapeKeyDown]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  // TODO: loading state implementation is not yet in acceptance criteria
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

        <Modal ref={modalRef} onClose={handleModalClose}>
          {!isWizardComplete && <FormScreen />}
          {isWizardComplete && <FinalScreen onClose={handleLeaveForm} />}
        </Modal>
      </AppContext>
    </ThemeProvider>
  );
};

export default App;
