import React from "react";

const Sidebar = ({ theme }) => {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: theme.headerColor,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "10px" }}>Alexandra Somodi</h3>
        <p style={{ fontSize: "14px", marginBottom: "20px" }}>
          I'm Alexandra, an engineer and musician at the University of Southern California. Welcome to my online diary!
        </p>
        <div>
          <h4></h4>
          <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "14px", lineHeight: "1.8" }}>
            <li>Makers Spring 2025 Showcase</li>
            <li>MTR Fall 2024 Show: Falsettos</li>
            <li>Summer in North Carolina</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
