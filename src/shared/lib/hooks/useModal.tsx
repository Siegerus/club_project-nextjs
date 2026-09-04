"use client";
import { RefObject, useEffect, useState } from "react";

function useModal(modalRef?: RefObject<HTMLElement | null>) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";

    const closeWindow = (e: MouseEvent) => {
      if (e.target === modalRef?.current) return;
      setIsModalOpen((prevState) => !prevState);
    };
    document.body.addEventListener("click", closeWindow);

    return () => document.body.removeEventListener("click", closeWindow);
  }, [isModalOpen, modalRef]);

  return {
    isModalOpen,
    handleToggleModal,
  };
}

export default useModal;
