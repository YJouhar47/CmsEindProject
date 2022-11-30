import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const MoviePage = ({data: {wpBatmanMovie: {batmanMovieFields: movie}}}) => {
  return (
    <Layout pageTitle="Movie Template">
      <div>
        <h3>{movie.title}</h3>
        <h1>{movie.writers}</h1>
        <div dangerouslySetInnerHTML={{__html: movie.description}} />
        <p>Time : {movie.time}</p>
        <p>Music : {movie.music}</p>
        <p>Genre : {movie.genre}</p>
        <p>Director : {movie.director}</p>
        <p>Countries : {movie.countries}</p>
        </div>
        <Link to='/movies'>Go back</Link>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($slug: String) {
  wpBatmanMovie(slug: {eq: $slug}) {
    batmanMovieFields {
      title
      description
      time
      music
      genre
      fieldGroupName
      director
      countries
      writers
    }
  }
}
`

export default MoviePage