import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
const MoviesPage = ({data:{allWpBatmanMovie:{edges}}}) => {
    return (
        <Layout pageTitle="Movies of Batman">
            {
                edges.map((item)=> {
                    const movie = item.node.batmanMovieFields
                    return <p key={item.node.id}>{movie.title} {movie.director}</p>
                })
            }
        </Layout>
    )
}
export const query = graphql`
query MyQuery {
    allWpBatmanMovie {
      edges {
        node {
            id
          batmanMovieFields {
            title
            description
          }
        }
      }
    }
  }
`
export default MoviesPage;