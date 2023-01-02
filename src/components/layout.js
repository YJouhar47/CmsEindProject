import { useStaticQuery, graphql } from 'gatsby'
import React from 'react';
import {container, main} from './layout.module.css'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div className={container}>
            <Navbar/>
            <main className={main}>{children}</main>
            <Footer/>
        </div>
    
  )
}

export default Layout