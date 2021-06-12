import * as React from "react"
import { Link } from "gatsby"

import { Nav } from "."
import { Container, FeatureImage } from "."

// import 'C:/Users/Branden/Desktop/GIT Projects/frontend_Gatsby/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from '../components/navigationbar';


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

//   <React.Fragment>
//   <Router>
//     // <NavigationBar />
//   //</Router>
// //</React.Fragment> 
  return (
    <div className = "global-wrapper" data-is-root-path={isRootPath}>
      <Nav/>
      <div><header className="global-header">{header}</header></div>
      <main>
      {children}
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
