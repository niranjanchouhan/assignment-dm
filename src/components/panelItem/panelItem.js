import React from "react";
import { ToggleButton } from "../toggleButton/toggleButton";

import './panelItem.scss';

export const PanelItem = ({ item, setChildEnabled }) => {
  return (
    <div className="panel-item-container">
      <span className="rectangle-box"></span>
      <label>{item.name}</label>
      <div className="panel-options">
        {item.hasNumericOption ? (
          <select name="panelSelectDropdown" id="panelSelect">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        ) : null}
        <ToggleButton value={item.value} setChildEnabled={setChildEnabled} />
      </div>
    </div>
  );
};
