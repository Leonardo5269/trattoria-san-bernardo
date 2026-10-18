import React, { forwardRef, useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import { IoClose } from 'react-icons/io5';

type Props = {
  darkBackground?: boolean;
  children: React.ReactNode;
};

const Modal = forwardRef<HTMLDialogElement, Props>(({ darkBackground = false, children }, ref) => {
  const localRef = useRef<HTMLDialogElement | null>(null);

  // merge forwarded ref and localRef so both are set
  const setRefs = (node: HTMLDialogElement | null) => {
    localRef.current = node;
    if (!ref) return;
    if (typeof ref === 'function') ref(node);
    else (ref as React.MutableRefObject<HTMLDialogElement | null>).current = node;
  };

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;

    const updateBody = () => {
      if (el.open) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = '';
    };

    // ensure correct state now
    updateBody();

    const onClose = () => { document.body.style.overflow = ''; };
    const onCancel = () => { document.body.style.overflow = ''; };

    el.addEventListener('close', onClose);
    el.addEventListener('cancel', onCancel);

    const mo = new MutationObserver(updateBody);
    mo.observe(el, { attributes: true, attributeFilter: ['open'] });

    return () => {
      el.removeEventListener('close', onClose);
      el.removeEventListener('cancel', onCancel);
      mo.disconnect();
      document.body.style.overflow = '';
    };
  }, [ref]);

  return (
    <dialog
      ref={setRefs}
      className={`${styles.modal} ${darkBackground ? styles['dark-background'] : ''}`}
      onClick={(e) => {
        // backdrop click closes
        if (e.target === e.currentTarget) localRef.current?.close();
      }}
      aria-modal="true"
    >
      <button
        className={styles.close}
        type="button"
        onClick={() => localRef.current?.close()}
        aria-label="Chiudi finestra di dialogo"
      >
        <IoClose />
      </button>
      {children}
    </dialog>
  );
});

Modal.displayName = 'Modal';
export default Modal;
