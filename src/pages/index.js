// Step 1: Import React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { PageLayout } from "../components/PageLayout";
import { Hero } from "../components/Hero";
import { TextWithLink } from "../components/TextWithLink";

const themes = [
  { backgroundColor: "#fbfeff", color: "#48C7F6", headerColor: "#D1F3FF" }, // blue
  { backgroundColor: "#fdfffd", color: "#78D87C", headerColor: "#cae8cc" }, // green
  { backgroundColor: "#fffffd", color: "#F1DE5D", headerColor: "#fdf6c5" }, // yellow
  { backgroundColor: "#fffbfc", color: "#F67BAE", headerColor: "#ffeaee" }, // pink
  { backgroundColor: "#fefaff", color: "#AA4CC2", headerColor: "#f0dcfd" }, // purple
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
              I'm Alexandra, an engineer and musician at the University of Southern California. Welcome to my online diary!
            </p>
            <div>
              <h3>Latest shenanigans</h3>
              <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "14px", lineHeight: "1.8" }}>
                <li>Makers Fall 2024 Showcase</li>
                <li>MTR Fall 2024 Show: Falsettos</li>
                <li>Summer in North Carolina</li>
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
                      <p className="hero-description">I like many things TBD.</p>

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
                        <TextWithLink to="/me" theme={theme}>
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
