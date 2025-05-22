// Step 1: Import React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { PageLayout } from "../components/PageLayout";
import { Hero } from "../components/Hero";
import { TextWithLink } from "../components/TextWithLink";

import "../styles/main.css";

const themes = [
  { backgroundColor: "#fffbfc", color: "#F67BAE", headerColor: "#ffeaee", darkColor: "#502939" }, // pink
  { backgroundColor: "#fffffd", color: "#F1DE5D", headerColor: "#fdf6c5", darkColor: "#29260f" }, // yellow
  { backgroundColor: "#fdfffd", color: "#78D87C", headerColor: "#cae8cc", darkColor: "#234024"}, // green
  { backgroundColor: "#fbfeff", color: "#48C7F6", headerColor: "#D1F3FF", darkColor: "#1c4554" }, // blue
  { backgroundColor: "#fefaff", color: "#AA4CC2", headerColor: "#f0dcfd", darkColor: "#43184d" }, // purple
];

const IndexPage = () => {
  const [theme, setTheme] = React.useState(themes[0]);

  return (
    <>
      {/* Add Header */}
      <Header theme={theme} />

      <div style={{ display: "flex", height: "100vh", backgroundColor: theme.backgroundColor, color: "#000" }}>
        {/* Left Navigation Bar */}
        <div
          style={{
            width: "250px",
            backgroundColor: theme.headerColor,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            fontFamily: "'Lucida Console', Monaco, monospace",
          }}
        >
          <div>
            <h3 style={{ marginBottom: "10px" }}>About me</h3>
            <p style={{ fontSize: "14px", marginBottom: "20px" }}>
              I'm Alexandra, an engineer and pharmacology student at the University of Southern California. Welcome to my corner of the internet!
            </p>
            <div>
              <h3>Currently into: </h3>
              <div className="interest-tags">
                <span style={{backgroundColor: theme.color}} className="tag">tomasulo's algorithm</span>
                <span style={{backgroundColor: theme.color}} className="tag">clarins lip oil</span>
                <span style={{backgroundColor: theme.color}} className="tag">precision medicine</span>
                <span style={{backgroundColor: theme.color}} className="tag">matcha macchiatos</span>
                <span style={{backgroundColor: theme.color}} className="tag">Falsettos (2016)</span>
              </div>
              <h3>Quick Links</h3>
              <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "14px", lineHeight: "1.8" }}>
                <li>LinkedIn</li>
                <li>Curriculum Vitae</li>
                <li>Firmware/Hardware Resume</li>
                <li>Biomedical Resume</li>
                <li>Beauty NPD Resume</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1 }}>
          <PageLayout>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
              {/* Left Section (Text) */}
              <div style={{ flex: 2 }}>
                <Hero title="Hey, I'm Alexandra!" type="index">
                  <div className="hero-wrapper">
                    <div>
                      <p className="hero-description">
                        I'm an engineering student at the University of Southern California with a passion for using technology to make the world better for all.
                      </p>
                      <p className="hero-description">I love everything from embedded systems to neuroscience to marketing to beauty and skincare! I'm confident I'd be more than pleased with a career in any (or all!) of these fields. </p>

                      <p className="hero-description">
                        On this site, you can find my{" "}
                        <TextWithLink to="/blog" theme={theme}>
                          experience
                        </TextWithLink>{" "}
                        and{" "}
                        <TextWithLink to="/notes" theme={theme}>
                          projects
                        </TextWithLink>
                        , read some of my{" "}
                        <TextWithLink to="/digital journal" theme={theme}>
                          journal
                        </TextWithLink>
                        , or learn more{" "}
                        <TextWithLink to="/about" theme={theme}>
                          about me
                        </TextWithLink>
                        .
                      </p>
                      <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
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
                            }}
                            title={`Theme ${index + 1}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Hero>
              </div>

              {/* Right Section (Image) */}
              <div style={{ flex: 1, textAlign: "center" }}>
                <StaticImage
                  src="../images/somodiheadshot.png"
                  alt="my headshot"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </PageLayout>
        </div>
      </div>
    </>
  );
};

IndexPage.Layout = Layout;
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
