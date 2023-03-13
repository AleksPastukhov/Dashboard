import { useEffect } from 'react';

import { Modal } from './Modal.styled';

export function ModalWindow({ onCloseModal, children }) {
  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onCloseModal]);

  return <Modal>{children}</Modal>;
}
