"use client";

import Modal from "@/components/Modal/Modal";
import React, { useEffect, useRef } from "react";

export default function PopupSection() {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setTimeout(() => {
      modalRef.current?.showModal();
    }, 4000);
  }, []);
  return (
    <div>
      <Modal ref={modalRef} darkBackground>
        <img src="/pop-up.jpeg" alt="cenone-capodanno" />
      </Modal>
    </div>
  );
}
