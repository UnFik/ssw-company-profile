import React from "react";
import { useId } from "react";
import { Checkbox } from "./checkbox";

interface CheckBoxProps {
  category: string;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const CheckboxButton: React.FC<CheckBoxProps> = ({category, checked, onChange}) => {
  const id = useId();
  const handleCheckboxChange = () => {
    if (onChange) {
      onChange(!checked); // Toggle the checked state and call the onChange callback
    }
  };

  return (
    <div className="w-full h-auto items-top flex">
      <input
        id={id}
        type="checkbox"
        className="checked"
        checked={checked}
        onChange={handleCheckboxChange}
        // onCheckedChange={handleCheckboxChange}
      />
      <label
        htmlFor={id}
        className="w-full h-auto font-semibold text-primary py-6 my-auto rounded-none text-center text-white select-none"
      >
        {category}
      </label>
    </div>
  );
};

export default CheckboxButton;
