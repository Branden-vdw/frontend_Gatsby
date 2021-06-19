import * as React from "react"
import { Link } from "gatsby"

import { NavWrapper } from "../elements"
import { Container } from "./Container"
import { Content } from "../components/Content"

// import 'C:/Users/Branden/Desktop/GIT Projects/frontend_Gatsby/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from '../components/navigationbar';


const Layout = ({ location, title, PostTitle, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header, header2
  if (isRootPath) {
    header2=("HOME/BLOG")
    header = (
      
        <Link className="header-link-home" to="/">{title}</Link>
    )
  } else {
    header2=("")
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
    <div className="grid-container-site" data-is-root-path={isRootPath}>
      <NavWrapper><ul
          style={{
            display: "flex",
            flexWrap: `wrap`,
            listStyle: `none`,
          }}
        ><li>{header} </li>
        <li className="li-item-header"><Link style={{
          textDecoration:'none',
        }} to = "/">Home</Link></li> 
        <li className="li-item-header" style={{
          marginLeft:20,
        }}
        >Shop</li>
        <li className="li-item-header" style={{
          marginLeft:20,
        }}
        >Blog</li>
        </ul>
        </NavWrapper>
        <div className ="container-item-H2-fr1"></div>
      <div className="container-item-Header2">
      
      <ul
          style={{
            display: "flex",
            flexWrap: `wrap`,
            listStyle: `none`,
          }}
        ><li className="header2-H1"><Link to = "/blog">{PostTitle} </Link></li>
        <li className="H2-home-blog">{header2}</li> 
        </ul>
      
      </div>
      <div className ="container-item-H2-fr2"></div>
      <div className="container-item-body">
      <main> 
      {children}
      </main>
      </div>
      <div className="container-item-footer-excess1"></div>
      
      
      
      <footer className="container-item-footer">
        <div>
          <h1 className="header-link-home">{title}</h1>
        <p className="p-footer-info">        
          © {new Date().getFullYear()}, Teamgeek
        </p>
        </div>
       <div > <h4 className="H4-footer">about us</h4>
        <p className="p-footer">locations</p>
        <p className="p-footer">what we do</p>
        <p className="p-footer"> how we do it</p> 
        <p className="p-footer">wo we are</p> </div>
        <div ><h4 className="H4-footer">product</h4>
        <p className="p-footer">prints</p>
        <p className="p-footer">lorem ipsum</p>
        <p className="p-footer">this is a dummy test</p>
        <p className="p-footer">hello</p></div>
        <div><h4 className="H4-footer">contact us</h4>
       <p className="p-footer-info"> work@teamgeek.io </p>
       <p className="p-footer-info">+27 64 891 2008</p></div>

      </footer>
      <div className="container-item-footer-excess2"></div>
      </div>
      
  )
}

export default Layout
