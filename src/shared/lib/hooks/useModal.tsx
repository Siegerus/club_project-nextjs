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

    const closeWindow = (e: MouseEvent | KeyboardEvent) => {
      const target = e.target as Node | null;
      if (target && modalRootRef.current?.contains(target)) return;
      handleCloseModal();
    };

    document.body.addEventListener("click", closeWindow);
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeWindow(e);
    });

    document.body.style.overflow = isModalOpen ? "hidden" : "auto";

    return () => {
      document.body.removeEventListener("click", closeWindow);
      document.body.removeEventListener("keydown", closeWindow);
      document.body.style.overflow = "auto";
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
