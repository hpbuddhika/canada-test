import React, { useEffect, useState } from "react"
import Answers from "./answers"

const Question = props => {
  const questionsWithAnswersList = []
  const answeredQuestionList = []


//   {id: '2bba36c5-31f5-5be1-bc52-f7c19231d791', frontmatter: {…}}
// frontmatter:
// a1: "a1"
// a2: "a2"
// a3: "a3"
// a4: "a4"
// hint
// correctAnswer: "a1"


  props.questions.forEach(element => {
    questionsWithAnswersList.push(element.node)
  })

  const questionData = questionsWithAnswersList[0]
  console.log("question data ==> ", questionData)

  const [currentQuestion, setCurrentQuestion] = useState(
    <div id = {questionData.id}>
      <h1 className="h-1/3 text-2xl font-medium text-gray-900">
        {questionData.frontmatter.question}
      </h1>
      <Answers answers = {questionData.frontmatter}></Answers>
      <div className="h-1/3">{questionData.frontmatter.hint}</div>
    </div>
  )

  // useEffect(() => {
  //   setCurrentQuestion( <>
  //     <h1 className="h-1/3 text-2xl font-medium text-gray-900">
  //       Et nulla in voluptate dolor exercitation aliquip commodo et ut
  //       consectetur ipsum non. Enim eiusmod dolor aliquip ea reprehenderit
  //       deserunt in non amet eu non do incididunt. Quis qui duis exercitation
  //       ad ullamco anim enim laboris ut sunt velit.
  //     </h1>
  //     <Answers></Answers>

  //     <div className="h-1/3">
  //       Et nulla in voluptate dolor exercitation aliquip commodo et ut
  //       consectetur ipsum non. Enim eiusmod dolor aliquip ea reprehenderit
  //       deserunt in non amet eu non do incididunt. Quis qui duis exercitation
  //       ad ullamco anim enim laboris ut sunt velit. Qui nostrud dolor eu sunt.
  //       Laborum laboris mollit et ut esse proident ex commodo sit ullamco
  //       cupidatat.
  //     </div>
  //   </>)
  // }, [])

  const onNextQuestion = (questionsWithAnswersList) => {
    console.log("question with answers list ======> ", questionsWithAnswersList)
    const questionData = questionsWithAnswersList[1]
    setCurrentQuestion(
      <div id = {questionData.id}>
      <h1 className="h-1/3 text-2xl font-medium text-gray-900">
        {questionData.frontmatter.question}
      </h1>
      <Answers answers = {questionData.frontmatter}></Answers>
      <div className="h-1/3">{questionData.frontmatter.hint}</div>
    </div>
    )
  }

  console.log(questionsWithAnswersList)

  return (
    <>
      <div className="w-full h-full text-left flex flex-col">
        {currentQuestion}
        <div className="mt-10 text-right">
          <button onClick={()=>onNextQuestion(questionsWithAnswersList)} class="btn btn-accent">
            Next Question
          </button>
        </div>
      </div>
    </>
  )
}

export default Question
