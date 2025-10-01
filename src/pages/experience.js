import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image";

import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { PageLayout } from '../components/PageLayout'
import { TextWithLink } from '../components/TextWithLink'
import "../styles/main.css";
import "../styles/experience.css";
import { experiences } from '../components/ExperienceHelper.js'

const themes = [
  { backgroundColor: "#fffbfc", color: "#F67BAE", headerColor: "#ffeaee", darkColor: "#502939" }, // pink
  { backgroundColor: "#fffffd", color: "#F1DE5D", headerColor: "#fdf6c5", darkColor: "#29260f" }, // yellow
  { backgroundColor: "#fdfffd", color: "#78D87C", headerColor: "#cae8cc", darkColor: "#234024"}, // green
  { backgroundColor: "#fbfeff", color: "#48C7F6", headerColor: "#D1F3FF", darkColor: "#1c4554" }, // blue
  { backgroundColor: "#fefaff", color: "#AA4CC2", headerColor: "#f0dcfd", darkColor: "#43184d" }, // purple
];

const ExperiencePage = () => {
  const [theme, setTheme] = React.useState(themes[0]);

  return (
    <>
        <Header theme={theme} />
        <div style={{ backgroundColor: theme.backgroundColor, height: "100vh", color: "#000"}}>
        <PageLayout>

            <div>
      <div style={{color: theme.darkColor}} className="section-header">Experience</div>

      <div style={{ marginTop: "20px", display: "flex", gap: "15px", justifyContent: "center", alignItems: "center" }}>
                      {themes.map((t, index) => (
                        <div
                          key={index}
                          onClick={() => setTheme(t)}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: theme.backgroundColor === t.backgroundColor ? t.color : "transparent",
                            border: `6px solid ${t.color}`,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "20px"
                          }}
                          title={`Theme ${index + 1}`}
                        ></div>
                      ))}
                    </div>

<div className = "experience-grid">
{experiences.map((experiences, i) => (
<div className="exp-card" key={i}>
  <div className="exp-top">
    <img className="exp-logo" src={experiences.logo} alt={`${experiences.org} logo`} />
    <div className="exp-card-meta">
      <div className="exp-title">{experiences.title}</div>
      <div className="exp-org">{experiences.org}</div>
      <div className="exp-time">{experiences.time}</div>
      <div className="exp-categories">
        {experiences.categories.map((cat, idx) => (
          <span style={{backgroundColor: theme.headerColor, color: theme.darkColor }}className="exp-category" key={idx}>{cat}</span>
        ))}
      </div>
    </div>
  </div>

  <ul className="exp-description">
    {experiences.description.map((line, j) => (
      <li key={j}>{line}</li>
    ))}
  </ul>
</div>
))}
</div>

    </div>
        </PageLayout>
        </div>
    </>
    );
    };

    
ExperiencePage.Layout = Layout
export const Head = () => <title>Experience</title>

export default ExperiencePage
