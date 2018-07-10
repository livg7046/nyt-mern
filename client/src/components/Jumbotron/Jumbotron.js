import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", textAlign: "center" }}
    className="jumbotron bg-info text-light"
  >
    {children}
  </div>
);

export default Jumbotron;
