import React from 'react'

// import netlify from '../../content/thumbnails/netlify.png'
// import gatsby from '../assets/gatsby.png'
// import github from '../assets/nav-github.png'

// const links = [
//   { url: 'https://taniarascia.substack.com', label: 'Email signup' },
//   { url: 'https://www.taniarascia.com/rss.xml', label: 'RSS feed' },
//   { url: 'https://bsky.app/profile/tania.dev', label: 'Bluesky' },
//   { url: 'https://ko-fi.com/taniarascia', label: 'Buy me a coffee' },
// ]
// const madeWithLinks = [
//   { url: 'https://www.gatsbyjs.org', label: 'Gatsby', icon: gatsby },
//   { url: 'https://github.com/taniarascia', label: 'GitHub', icon: github },
//   { url: 'https://www.netlify.com', label: 'Netlify', icon: netlify },
// ]

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="footer-made-by">Made with ❤️ by Tania Rascia</div>
      </section>
    </footer>
  )
}