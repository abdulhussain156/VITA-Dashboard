import React, { createContext, useState, useContext } from 'react';

const CalendarContext = createContext();

export const useCalendarContext = () => {
  return useContext(CalendarContext);
};

export const CalendarProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const toggleShow = () => {
    setShow(!show);
  };

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <CalendarContext.Provider value={{ show, toggleShow, data, updateData, setShow }}>
      {children}
    </CalendarContext.Provider>
  );
};
