import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'
import { container, img, txt, link } from "../../styles/moviesindex.module.css"
const MoviesPage = ({ data: { allWpBatmanMovie: { edges } } }) => {

  return (
    <Layout pageTitle="Movies of Batman">
      <div style={{ display: "flex" }}>
        {
          edges.map((item) => {
            const movie = item.node.batmanMovieFields
            const slug = item.node.slug
            const image = getImage(movie.picture.localFile)
            return <div className={container}> <Link to={`/movies/${slug}`} className={link} >
              <GatsbyImage
                image={image}
                alt={movie.picture.localFile}
                className={img}
              />
              <p key={item.node.id} className={txt} style={{fontSize:"23px"}}><b>{movie.title}</b></p>
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
  allWpBatmanMovie {
    edges {
      node {
        batmanMovieFields {
          title
          writers
          description
        	picture{
          localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }}  
        }
        id
        slug
      }
    }
  }
}
`
export default MoviesPage;