"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

import { Hamburger } from "@/shared";
const NavMobile = dynamic(() => import("./nav-mobile"));

const MobileMenuToggle = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleNavClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <Hamburger isActive={isVisible} onClick={handleNavClick} />
      {isVisible && (
        <NavMobile isVisible={isVisible} onClick={handleNavClick} />
      )}
    </>
  );
};

export default MobileMenuToggle;
