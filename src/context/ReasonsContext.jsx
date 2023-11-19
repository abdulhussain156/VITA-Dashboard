import React, { createContext, useState, useContext } from 'react';

const ReasonsContext = createContext();

export const useReasonsContext = () => {
  return useContext(ReasonsContext);
};

export const ReasonsProvider = ({ children }) => {
  const [showReasons, setShowReasons] = useState(false);

  const handleClose = () => {
    console.log('close');
    setShowReasons(false);
  };

  const handleShow = () => {
    console.log('open');
    setShowReasons(true);
  };

  return (
    <ReasonsContext.Provider value={{ showReasons, setShowReasons, handleClose, handleShow }}>
      {children}
    </ReasonsContext.Provider>
  );
};
