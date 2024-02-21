import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className="w-10/12 md:w-1/2 h-1/4 md:h-2/5 rounded-lg p-7 shadow-sm "
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
