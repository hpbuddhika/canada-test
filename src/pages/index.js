import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"


const Home = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`

 
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <h1>hi</h1>
    </Layout>
  )
}



export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`









export default Home
