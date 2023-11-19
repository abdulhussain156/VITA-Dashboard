import React, { useState } from 'react';

const useShowReasons = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return {
    handleShow,
    show,
    setShow,
  };
};

export default useShowReasons;
