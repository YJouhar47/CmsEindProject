import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {container, link, img, imgpos, textpos, h3description} from '../../styles/movie.module.css'

const MoviePage = ({data: {wpBatmanMovie: {batmanMovieFields: movie}}}) => {
  const image = getImage(movie.picture.localFile)
  return (
    <Layout pageTitle="Movie Template">
      <div className={container}>
        <div className={imgpos}>
      <GatsbyImage
                image={image}
                alt={movie.picture.localFile}
                className={img}
              />
              </div>
              <div className={textpos}>
        <h1>{movie.title}</h1>
        <h3 className={h3description}>{movie.description}</h3>
        <p>Writers : {movie.writers}</p>
        
        <p>Time : {movie.time}</p>
        <p>Music : {movie.music}</p>
        <p>Genre : {movie.genre}</p>
        <p>Director : {movie.director}</p>
        <p>Countries : {movie.countries}</p>
        </div>
        </div>
        <Link to='/movies' className={link}><p>Go back</p></Link>
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

`

export default MoviePage