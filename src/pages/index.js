import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { text} from "../styles/index.module.css"
const IndexPage = ({ data: { wpPage: { homeFields },featuredProducts }, }) => {
  const image = getImage(homeFields.picture.localFile)
  return (
    <Layout>
      <div style={{display:"flex"}}>
      <div className={text}>
      <h1 style={{fontSize:"50px"}}>{homeFields.title}</h1>
      <h3 style={{fontSize:"30px"}}>{homeFields.description}</h3>
      </div>
      <div style={{ width: '50%', height: '50%' }}>
        <GatsbyImage
          image={image}
          alt={homeFields.picture.localFile}
          style={{width:400, height:400, borderRadius: "8px", marginTop:"7rem", marginLeft:"2rem"}}
        />
        
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      description
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      featuredProducts {
        ... on WpBatmanMovie {
          id
          slug
          batmanMovieFields {
            title
            description
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
}


`
export default IndexPage