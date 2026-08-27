"use client";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

import { Hamburger } from "@/shared";
const NavMobile = dynamic(() => import("./nav-mobile"), { ssr: false });

const MobileMenuToggle = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleNavClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <Hamburger isActive={isVisible} onClick={handleNavClick} />
      <AnimatePresence>
        {isVisible && (
          <NavMobile onClick={handleNavClick}>
            <Hamburger isActive={isVisible} onClick={handleNavClick} />
          </NavMobile>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenuToggle;
