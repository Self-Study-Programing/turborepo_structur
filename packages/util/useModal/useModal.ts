import React, { useState } from "react";

export const useModal = () => {
  const [isOpened, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };
  return { isOpened, close, open };
};
