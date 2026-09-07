"use client";
import { useEffect, useRef, useState } from "react";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRootRef = useRef<HTMLDivElement | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen || !modalRootRef.current) return;

    const handleClickClose = (e: MouseEvent | KeyboardEvent) => {
      const target = e.target as Node | null;
      if (target && modalRootRef.current?.contains(target)) return;
      handleCloseModal();
    };

    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClickClose(e);
    };

    document.body.addEventListener("click", handleClickClose);
    document.body.addEventListener("keydown", handleKeyClose);

    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    document.body.style.paddingRight = isModalOpen ? "15px" : "0";

    return () => {
      document.body.removeEventListener("click", handleClickClose);
      document.body.removeEventListener("keydown", handleKeyClose);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [isModalOpen]);

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    modalRootRef,
  };
}

export default useModal;
