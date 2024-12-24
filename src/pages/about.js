// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image";

import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { PageLayout } from '../components/PageLayout'
import { Hero } from '../components/Hero'
import { TextWithLink } from '../components/TextWithLink'

const themes = [
  { backgroundColor: "#fbfeff", color: "#48C7F6", headerColor: "#D1F3FF"}, // blue
  { backgroundColor: "#fdfffd", color: "#78D87C", headerColor: "#cae8cc"}, // green
  { backgroundColor: "#fffffd", color: "#F1DE5D", headerColor: "#fdf6c5" }, // yellow
  { backgroundColor: "#fffbfc", color: "#F67BAE", headerColor: "#ffeaee" }, // pink
  { backgroundColor: "#fefaff", color: "#AA4CC2", headerColor: "#f0dcfd" }, // purple
];

const AboutPage = () => {
  const [theme, setTheme] = React.useState(themes[0]);

  return (
    <>
      {/* Add Header */}
      <Header theme={theme} />

      <div style={{ backgroundColor: theme.backgroundColor, height: "100vh", color: "#000" }}>
        <PageLayout>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div style={{ flex: 1, textAlign: "center" }}>
              <StaticImage
                src="../images/somodiheadshot.png"
                alt="my headshot"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <StaticImage
                src="../images/hiking2.png"
                alt="hiking in the appalachians"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <StaticImage
                src="../images/flute.png"
                alt="backstage in the pit band!"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>
            {/* Left Section (Text) */}
            <div style={{ flex: 2 }}>
              <Hero title="About me..." type="index">
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
                            marginBottom: "20px"
                          }}
                          title={`Theme ${index + 1}`}
                        ></div>
                      ))}
                    </div>
                <div className="hero-wrapper">
                  <div>
                    <p className="hero-description">
                      Hey there, I'm Alexandra! I'm a student at the{' '}
                      <TextWithLink to='https://www.usc.edu' theme={theme}>University of Southern California</TextWithLink>
                      {' '}studying computer engineering and pharmacology. I grew up in northern Iowa and
                      graduated from{' '}
                      <TextWithLink to='https://www.cfschools.org' theme={theme}>Cedar Falls High School</TextWithLink>,
                      where I found my passions for technology and music. 
                      </p>
                      <p className="hero-description">
                        Now, I'm an undergraduate researcher for
                      the{' '} 
                      <TextWithLink to='https://loni.usc.edu' theme={theme}>Lab of Neuroimaging</TextWithLink> at USC, 
                      as well as a course producer for an introductory {' '} 
                      <TextWithLink to='https://minghsiehece.usc.edu/mhi-home/' theme={theme}>embedded systems</TextWithLink>
                      {' '}course. I'm also involved in{' '} 
                      <TextWithLink to='https://viterbimakers.usc.edu' theme={theme}>Makers USC</TextWithLink>,{' '} 
                      <TextWithLink to='https://www.instagram.com/musicaltheatrerepertory/' theme={theme}>Musical Theatre Repertory</TextWithLink>, and USC's chapter of{' '} 
                      <TextWithLink to='https://www.sweusc.com' theme={theme}>Society of Women Engineers</TextWithLink>!
                    </p>
                    <p className="hero-description">
                      In my free time, I love to read, hike, and play flute. I'm also a huge cat person!
                    </p>
                    <p className="hero-description">
                      My biggest goal throughout school is to try as many new things as possible, whether that be a new club,
                      a new area of study (hence the pharmacology double major!), or even just a new coffee shop (
                        <TextWithLink to='https://alchemistcp.com' theme={theme}>this one's</TextWithLink>{' '}my favorite right now).
                      To see more of what I'm getting up to, check out my{' '}
                      <TextWithLink to="/blog" theme={theme}>experience</TextWithLink> and my{' '}
                      <TextWithLink to="/digital journal" theme={theme}>digital journal</TextWithLink>!

                    </p>
                  </div>
                </div>
              </Hero>
            </div>
            
            {/* Right Section (Image) */}
          </div>
        </PageLayout>
      </div>
    </>
  );
};

AboutPage.Layout = Layout
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component

export default AboutPage