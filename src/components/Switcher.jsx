import React, { useState } from "react";

const Switcher = ({ toggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (toggle) {
      toggle();
    }
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`block h-8 w-14 rounded-full transition-colors ${
              isChecked ? "bg-[#FF6452]" : " bg-[#E5E7EB]"  
            }`}></div>
          <div
            className={`dot absolute top-1 h-6 w-6 rounded-full bg-slate-gray transition-transform ${
              isChecked ? "translate-x-7" : "translate-x-1"
            }`}></div>
        </div>
      </label>
    </>
  );
};

export default Switcher;
