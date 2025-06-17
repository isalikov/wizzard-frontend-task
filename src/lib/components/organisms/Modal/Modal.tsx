import { PropsWithChildren, forwardRef, useImperativeHandle, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { IconClose } from '../../../icons';
import { StyledCloseButton, StyledModalContent, StyledModalOverlay } from './styled';
import { ModalProps, ModalRef } from './types';

export const Modal = forwardRef<ModalRef, PropsWithChildren<ModalProps>>(
  ({ children, selector, onClose }, ref) => {
    const { current: container } = useRef(document.querySelector(selector || '#root'));

    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true);
      },
      close: () => {
        setIsOpen(false);
      },
    }));

    if (!isOpen || !container) return null;

    const handleClose = () => {
      if (onClose) {
        onClose();
      } else {
        setIsOpen(false);
      }
    };

    return createPortal(
      <StyledModalOverlay>
        <StyledCloseButton type="button" onClick={handleClose}>
          <IconClose size={18} />
        </StyledCloseButton>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalOverlay>,
      container,
    );
  },
);

Modal.displayName = 'Modal';
