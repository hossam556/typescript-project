import React, { useState } from "react";

interface IProps {
  labelOn: string;
  labelOff: string;
}

const CheckBox: React.FC<IProps> = ({ labelOn, labelOff }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};

export default CheckBox;
