import * as React from "react"
import { Link } from "gatsby"

import { NavWrapper } from "../elements/NavElements"



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
          color: "#000033",
          textDecoration:'none',
        }} to = "/">Home</Link></li> 
        <li className="li-item-header" style={{
          color: "#000033",
          marginLeft:20,
        }}
        >Shop</li>
        <li className="li-item-header" style={{
          color: "#000033",
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
        ><li className="header2-H1">{PostTitle}</li>
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
          <h1 className="header-footer-home">{title}</h1>
        <p className="p-footer-info">        
          © {new Date().getFullYear()}, Teamgeek
        </p>
        </div>
       <div > <h4 className="H4-footer">About Us</h4>
        <p className="p-footer">Locations</p>
        <p className="p-footer">What we do</p>
        <p className="p-footer">How we do it</p> 
        <p className="p-footer">Who we are</p> </div>
        <div ><h4 className="H4-footer">Product</h4>
        <p className="p-footer">Prints</p>
        <p className="p-footer">Lorem ipsum</p>
        <p className="p-footer">This is a dummy test</p>
        <p className="p-footer">Hello</p></div>
        <div><h4 className="H4-footer">Contact us</h4>
       <p className="p-footer-info"><a style={{
          color: "#000033",
          textDecoration:'none',
        }} href="mailto:work@teamgeek.io"> work@teamgeek.io </a></p>
       <p className="p-footer-info"><a style={{
          color: "#000033",
          textDecoration:'none',
        }} href="tel:+27648912008">+27 64 891 2008</a></p></div>

      </footer>
      <div className="container-item-footer-excess2"></div>
      </div>
      
  )
}

export default Layout
