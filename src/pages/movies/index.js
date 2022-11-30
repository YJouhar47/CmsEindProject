import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
const MoviesPage = ({data:{allWpBatmanMovie:{edges}}}) => {
    return (
        <Layout pageTitle="Movies of Batman">
            {
                edges.map((item)=> {
                    const movie = item.node.batmanMovieFields
                    const slug = item.node.slug
                    return <Link to={`/movies/${slug}`}>
                      <p key={item.node.id}>{movie.title} {movie.time}</p>
                    </Link>
                })
            }
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
        }
        id
        slug
      }
    }
  }
}
`
export default MoviesPage;