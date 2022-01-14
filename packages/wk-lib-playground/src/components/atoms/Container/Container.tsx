import classNames from "classnames";
import type { NextPage } from "next";
import React, { ReactNode } from "react";
import "./Container.scss";

const Container: NextPage<{
  children: ReactNode;
  overflowVisible?: boolean
}> = ({ children, overflowVisible }) => {
  return (
    <div className={classNames("h-100 d-flex flex-column justify-content-between align-items-start f-container", {
      "overflow-hidden": !overflowVisible
    })}>
      {children}
    </div>
  );
};

export default Container;
