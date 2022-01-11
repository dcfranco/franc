import type { NextPage } from "next";
import { Feature } from "../../../interfaces/feature";
import React from "react";
import "./FeatureList.scss";

const FeatureListItem: NextPage<{
  feature: Feature;
}> = ({ feature }) => {
  return (
    <div className="feature-list__item">
      <i className="material-icons unselectable">{feature.icon}</i>
      <span className="text unselectable">{feature.name}</span>
    </div>
  );
};

export default FeatureListItem;
