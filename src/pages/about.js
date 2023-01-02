import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
    <main>
      <title>About Us</title>
      <h1>About Us</h1>
      <Link to="/">Back to Home</Link>
      <p>Artist Agency was founded in 1977 by founder, John Doe. AA continues to be at the forefront of art by establishing the careers of our talents on a holistic level -- and setting trends within the industry. </p>
    </main>
    </Layout>
  )
}

export default AboutPage