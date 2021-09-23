import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"


const Home = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`

 
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Header></Header>
      <Hero></Hero>
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
