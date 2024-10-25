import React from "react";

const Button = ({ num, setNum, selectedNum }) => {
  const handleClick = () => {
    setNum(num);
  };

  return (
    <button
      onClick={handleClick}
      className={selectedNum === num ? "btnc" : "btn"}
    >
      {num}
    </button>
  );
};

export default Button;
