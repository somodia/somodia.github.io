import React from "react";
import { Link } from "gatsby";

export const TextWithLink = ({ to, theme, children }) => (
  <Link
    to={to}
    style={{
      color: theme.color, // Dynamically use the current theme's color
      textDecoration: "none",
    }}
  >
    {children}
  </Link>
);