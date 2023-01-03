import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { link,batmanContainer, img, txt, batmanImage, featured, featuredcontainer, batmanText,linkFeatured } from "../styles/index.module.css"
const IndexPage = ({ data: { wpPage: { homeFields } }, }) => {
  const image = getImage(homeFields.picture.localFile)
  return (
    <Layout>
      <div className={batmanContainer}>
      <div className={batmanText}>
      <h1 style={{fontSize:"50px"}}>{homeFields.title}</h1>
      <h3 style={{fontSize:"30px"}}>{homeFields.description}</h3>
      <Link to="/movies" className={link}>See more</Link>
      </div>
      <div className={batmanImage}>
        <GatsbyImage
          image={image}
          alt={homeFields.picture.localFile}
          style={{width:400, height:400, borderRadius: "8px", marginTop:"7rem", marginLeft:"2rem"}}
        />
      </div>
      </div>
      <br/>
      <h1 style={{display:"flex",justifyContent:"center", fontSize:"35px", marginTop:"2rem"}}>Featured Products</h1>
      <div className={featured}>
        
      {
          homeFields.featuredProducts.map((item) => {
            const movie = item.batmanMovieFields
            const slug = item.slug
            const image = getImage(movie.picture.localFile)
            return <div className={featuredcontainer}> 
            <Link to={`/movies/${slug}`} className={linkFeatured}>
              <GatsbyImage
                image={image}
                alt={movie.picture.localFile}
                className={img}
              />
              <p key={item.id} className={txt} style={{fontSize:"23px"}}><b>{movie.title}</b></p>
              <p className={txt}>{movie.description}</p>
              </Link>
            </div>
          })
        }
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