export type ModalProps = {
  selector?: string;
  onClose?: () => void;
};

export type ModalRef = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};
