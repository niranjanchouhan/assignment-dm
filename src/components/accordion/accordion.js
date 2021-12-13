import React from "react";
import { PanelItem } from "../panelItem/panelItem";

import './accordion.scss';

export const Accordion = ({ data, index }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [isChildEnabled, setChildEnabled] = React.useState(data.value);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <PanelItem
          key={`panelItem${index}`}
          item={data}
          setChildEnabled={setChildEnabled}
        />
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div
          className={
            "accordion-content " + (isChildEnabled ? "" : "disable-click")
          }
        >
          {data.options.map((item, i) => (
            <PanelItem key={`panelItem${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
