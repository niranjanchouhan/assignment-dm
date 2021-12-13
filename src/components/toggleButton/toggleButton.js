import React, { useState } from "react";

import './toggleButton.scss';

export const ToggleButton = (props) => {
  const [isChecked, setChecked] = useState(props.value);

  function _handleChange() {
    setChecked(!isChecked);
    if (props.setChildEnabled) props.setChildEnabled(!isChecked);
  }

  return (
    <div className="switch-container">
      <label>
        <input
          checked={isChecked}
          onChange={(e) => _handleChange(e.target.value)}
          className="switch"
          type="checkbox"
        />
        <div>
          <div></div>
        </div>
      </label>
    </div>
  );
};
