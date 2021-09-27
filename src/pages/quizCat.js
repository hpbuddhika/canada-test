/* This example requires Tailwind CSS v2.0+ */
import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import QuestionTypes from "../components/questionTypes"



const QuizCat = ({ data, location }) => {

  const siteTitle =  `Title` 

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Header></Header>
      <QuestionTypes allQuestions = {data}></QuestionTypes>
      
    </Layout>
  )
}



export default QuizCat

