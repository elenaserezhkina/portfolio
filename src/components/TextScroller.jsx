import React, { useState, useEffect } from "react";

const TextScroller = ({ items }) => {
  const [arrIndex, setArrIndex] = useState(0);
  useEffect(() => {
    const iId = setInterval(() => {
      setArrIndex((index) => (index + 1) % items.length);
    }, 1000);
    return () => clearInterval(iId);
  }, [items]);

  return <>{items[arrIndex]}</>;
};

export default TextScroller;
