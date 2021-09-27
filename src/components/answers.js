import React, { useState,useEffect } from "react"
import svg from "../images/radio-btn.svg"
import * as style from "./answers.module.css"

const Answers = props => {
  const answerStates = {
    DEFAULT: "default",
    CORRECT: "correct",
    INCORRECT: "incorrect",
  }

  const answers = props.answers.answers
  const defaultCorrectAnswer = props.answers.correctAnswer

  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [answerState, setAnswerState] = useState("default")
  const [allAnswers, setAllAnswers] = useState()

  const [answerStyle0, setAnswerStyle0] = useState(style.default_answer)
  const [answerStyle1, setAnswerStyle1] = useState(style.default_answer)
  const [answerStyle2, setAnswerStyle2] = useState(style.default_answer)
  const [answerStyle3, setAnswerStyle3] = useState(style.default_answer)

  useEffect(() => {
  console.log("inside useeffect=============================",props)
  setCorrectAnswer(null)
  setAnswerState("default")
  setAnswerStyle0(style.default_answer)
  setAnswerStyle1(style.default_answer)
  setAnswerStyle2(style.default_answer)
  setAnswerStyle3(style.default_answer)


  }, [props]);

  console.log("answer Style0 == > ", answerStyle0)

  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`
  }

  const onAnswer = (e, index) => {

    setCorrectAnswer(props.answers.correctAnswer)

    if (
      answerState == answerStates.CORRECT ||
      answerState == answerStates.INCORRECT
    ) {
      return
    }
   
    if (e === answers[props.answers.correctAnswer - 1]) {
      console.log("correct answer=========")
      switch (index) {
        case 0:
          setAnswerStyle0(style.correct_answer)
        case 1:
          setAnswerStyle1(style.correct_answer)
        case 2:
          setAnswerStyle2(style.correct_answer)
        case 3:
          setAnswerStyle3(style.correct_answer)
      }

      setAnswerState(answerStates.CORRECT)
    } else {
      console.log("in correct answer=========",correctAnswer)
  
      switch (index) {
        case 0:
          setAnswerStyle0(style.incorrect_answer)
          
       

          // setAnswerStyle1(style.noncorrect_answer)
          // setAnswerStyle2(style.noncorrect_answer)
          // setAnswerStyle3(style.noncorrect_answer)
          break
        case 1:
          setAnswerStyle1(style.incorrect_answer)

          // setAnswerStyle0(style.noncorrect_answer)
          // setAnswerStyle2(style.noncorrect_answer)
          // setAnswerStyle3(style.noncorrect_answer)
          break
        case 2:
          setAnswerStyle2(style.incorrect_answer)

          // setAnswerStyle0(style.noncorrect_answer)
          // setAnswerStyle1(style.noncorrect_answer)
          // setAnswerStyle3(style.noncorrect_answer)
          break
        case 3:
          setAnswerStyle3(style.incorrect_answer) 
      
          // setAnswerStyle0(style.correct_answer)
          // setAnswerStyle1(style.noncorrect_answer)
          // setAnswerStyle2(style.noncorrect_answer)
          break
      }
      setAnswerState(answerStates.INCORRECT)
    }
  }

  const answersList = answers.map((answer, index) => (
    <div
      key={generateKey(answer)}
      className={
        index == 0
          ? answerStyle0
          : index == 1
          ? answerStyle1
          : index == 2
          ? answerStyle2
          : index == 3
          ? answerStyle3
          :null

      }
      onClick={() => onAnswer(answer, index)}
    >
      <div
        id="btn"
        className="relative h-full font-medium text-lg flex items-center gap-5 "
      >
        <span>
          <button>
            {index + 1 == correctAnswer ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="svg-icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                id={style.correct_icon}
              >
                <path
                  d="M426.666667 725.333333l-213.333334-213.333333 60.16-60.16L426.666667 604.586667l323.84-323.84L810.666667 341.333333z m85.333333-640a426.666667 426.666667 0 1 0 426.666667 426.666667A426.666667 426.666667 0 0 0 512 85.333333z"
                  fill="#31A400"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                version="1.1"
                id={style.default_icon}
              >
                <path d="M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512s190.933333 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667S747.733333 85.333333 512 85.333333z m0 768c-188.586667 0-341.333333-152.746667-341.333333-341.333333S323.413333 170.666667 512 170.666667s341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333z" />
              </svg>
            )}
          </button>
        </span>
        {answer}
      </div>
    </div>
  ))

  return (
    <div className="h-80 my-10 w-full  grid grid-flow-col grid-cols-1 grid-rows-4 ">
      {answersList}
    </div>
  )
}

export default Answers
