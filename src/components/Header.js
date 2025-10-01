// Header.js
import React from "react";
import { Link } from "gatsby";

export const Header = ({ theme }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px", // Adjust padding as needed
        backgroundColor: theme.headerColor, // custom color based on theme
        borderBottom: "1px solid #A8A6A6", // Optional border for visual separation
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Side: Logo */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginRight: "10px",
            fontSize: "24px",
          }}
        >
          ☕️ {/* Emoji or icon */}
        </span>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#333333", // Black or dark gray for the logo text
          }}
        >
          Alexandra Somodi
        </Link>
      </div>

      {/* Right Side: Navigation Menu */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          {["About", "Experience", "Projects", "Creative Portfolio", "Digital Journal"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                style={{
                  textDecoration: "none",
                  color: "#502939", // Use a dark color for links
                  fontWeight: "500",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  textDecoration: "underline", // Highlight active page
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header