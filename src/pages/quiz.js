import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import QuestionContainer from "../components/questionContainer"
import Seo from "../components/seo"

const Quiz = ({ data, location }) => {
  const siteTitle = `Title`
  const questions = data.allMarkdownRemark ? data.allMarkdownRemark.edges : []

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Header></Header>
      <QuestionContainer questions={questions}></QuestionContainer>
    </Layout>
  )
}

export const query = graphql`
  query questions {
    allMarkdownRemark(filter: { frontmatter: { date: {}, category: {} } }) {
      edges {
        node {
          id
          frontmatter {
            title
            category
            question
            answers
            correctAnswer
            hint
          }
        }
      }
    }
  }
`

export default Quiz
