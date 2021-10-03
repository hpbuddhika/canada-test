import React, { useEffect, useState,forwardRef,useImperativeHandle } from "react"
import Answers from "./answers"

const Question = React.forwardRef((props,ref) => {
  const questionsWithAnswersList = []
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [data, setData] = useState("")
  const [answeredQuestionList, setaAnsweredQuestionList] = useState([])

  React.useImperativeHandle(ref, () => ({
    foo(e) {
      console.log('fooo=========> ', e)
      setCurrentQuestion(
        <div>
         ola
        </div>
      )
    }
  }))

  const onUserAnswer = (userAnswer, question) => {
   
    const editedQuestion = { ...question, userAnswer }
    console.log("edited question==========> ", editedQuestion)
    setaAnsweredQuestionList([...answeredQuestionList, editedQuestion])
    console.log("answered arry  ****===> ", answeredQuestionList)
  }

  props.questions.forEach(element => {
    questionsWithAnswersList.push(element.node)
  })

  const questionData = questionsWithAnswersList[0]

  const [currentQuestion, setCurrentQuestion] = useState(
    <div id={questionData.id}>
      <h1 className="h-1/3 text-2xl font-medium text-gray-900">
        {questionData.frontmatter.question}
      </h1>
      <Answers
        id={questionData.id}
        answers={questionData.frontmatter}
        userAnswer={onUserAnswer}
      ></Answers>
      <div className="h-1/3">{questionData.frontmatter.hint}</div>
    </div>
  )

  useEffect(() => {
    props.onAnsweredQuestionList(answeredQuestionList)
  }, [currentQuestionIndex, answeredQuestionList])



  const onNextQuestion = questionsWithAnswersList => {
    if (questionsWithAnswersList.length - 1 == currentQuestionIndex) {
      alert("no more questions")
      return
    }
    // useState issue.needs to be fixed
    const questionData = questionsWithAnswersList[currentQuestionIndex + 1]
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  
    for (let answeredQuestion of answeredQuestionList) {
      if (answeredQuestion.id === questionData.id) {
        const questionData = answeredQuestionList.filter(obj => {
          return obj.id === answeredQuestion.id
        })
        setCurrentQuestion(
          <div id={questionData[0].id}>
            <h1 className="h-1/3 text-2xl font-medium text-gray-900">
              {questionData[0].answers.question}
            </h1>
            <Answers
              previousQuestionUserAnswer={questionData[0].userAnswer}
              answers={questionData[0].answers}
            ></Answers>
            <div className="h-1/3">{questionData[0].answers.hint}</div>
          </div>
        )
        return
      }
    }
    // const questionData = answeredQuestionList[currentQuestionIndex + 1]

    // setCurrentQuestionIndex(currentQuestionIndex + 1)
    setCurrentQuestion(
      <div id={questionData.id}>
        <h1 className="h-1/3 text-2xl font-medium text-gray-900">
          {questionData.frontmatter.question}
        </h1>
        <Answers
          previousQuestionUserAnswer={questionData.userAnswer}
          id={questionData.id}
          answers={questionData.frontmatter}
          userAnswer={onUserAnswer}
        ></Answers>
        <div className="h-1/3">{questionData.frontmatter.hint}</div>
      </div>
    )
  }

  const onPreviousQuestion = answeredQuestionList => {
    if (currentQuestionIndex <= 0) {
      return
    }
    setCurrentQuestionIndex(currentQuestionIndex - 1)

    const questionData = answeredQuestionList[currentQuestionIndex - 1]
    console.log("previous question data=-------- ", answeredQuestionList)

    setCurrentQuestion(
      <div id={questionData.id}>
        <h1 className="h-1/3 text-2xl font-medium text-gray-900">
          {questionData.answers.question}
        </h1>
        <Answers
          previousQuestionUserAnswer={questionData.userAnswer}
          answers={questionData.answers}
        ></Answers>
        <div className="h-1/3">{questionData.answers.hint}</div>
      </div>
    )
  }

  return (
    <>
      <div className="w-full h-full text-left flex flex-col">
        {currentQuestion}
        <div className="flex justify-between mt-10">
          <button
            onClick={() => onPreviousQuestion(answeredQuestionList)}
            class="btn btn-accent"
            style={currentQuestionIndex == 0 ? style.previousBtn : null}
          >
            Previous Question
          </button>
          <button
            onClick={() => onNextQuestion(questionsWithAnswersList)}
            class="btn btn-accent"
          >
            {questionsWithAnswersList.length - 1 == currentQuestionIndex
              ? "Finish"
              : "Next Question"}
          </button>
        </div>
      </div>
    </>
  )
})

const style = {
  previousBtn: {
    visibility: "hidden",
  },
}

export default Question
