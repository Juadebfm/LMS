import React from "react";

const Button = ({ btnText, btnFunc, btnClass }) => {
  return (
    <div
      className={`${btnClass} px-8 py-4 bg-primary_orange text-white w-auto flex items-center justify-center`}
    >
      {btnText}
    </div>
  );
};

export default Button;
