import type { NextPage } from "next";
import React from "react";
import { ReactNode } from "react";
import "./Container.scss";

const ContainerMessage: NextPage<{
  children: ReactNode | string;
}> = ({ children }) => {
  return (
    <div className="message warning">
      <span className="text unselectable">{children}</span>
    </div>
  );
};

export default ContainerMessage;
