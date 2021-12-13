import React from "react";
import { PanelItem } from "../panelItem/panelItem";
import { Accordion } from "../accordion/accordion";

import './panel.scss';

export const Panel = ({ data }) => {
  return (
    <div className="panel-container">
      {data.map((item, i) => {
        return (
          <div key={`panelItemParent${i}`}>
            <h5>{item.name}</h5>
            <div className="panel-child">
              {item.options.map((item, i) =>
                item.options.length > 0 ? (
                  <Accordion data={item} index={i} />
                ) : (
                  <PanelItem key={`panelItem${i}`} item={item} />
                )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
