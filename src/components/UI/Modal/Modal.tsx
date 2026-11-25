import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

// This type is used with 'forwardRef' to ensure that the Modal component can be used with useImperativeHandle to expose an open method
type ModalHandle = {
  openModal: () => void;
};

// The onClose function prop is used to propagate the default close event that can be triggered by <dialog>
type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose },
  ref,
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // useImperativeHandle is used to expose the open method to other components
  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      },
    };
  });

  // Bellow, the onClose prop is set on <dialog> to handle the case that the user closes the modal via a built-in mechanism
  return createPortal(
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
});

export default Modal;
