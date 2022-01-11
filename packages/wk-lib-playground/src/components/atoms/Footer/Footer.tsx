import type { NextPage } from "next";
import React, { ReactNode } from "react";
import "./Footer.scss";

const Footer: NextPage<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <div className="container-fluid mt-auto d-flex justify-content-center footer">
      {children}
      <div className="footer__copyright">
        © Copyright 2020 - Todos os direitos reservados
      </div>
    </div>
  );
};

export default Footer;