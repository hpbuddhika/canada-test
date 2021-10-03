import React,{useRef} from "react"
import Question from "./question"
import QuestionBox from "./questionBox"

const QuestionContainer = props => {

  const questionRef = useRef();


  const passDataToQuestion = (e) => { 
    console.log("pass data to question ======> ",e)
    questionRef.current.foo(e);

  
  }

  

  const defaultQuestionList = props.questions.map((question,index) => (
    <QuestionBox passDataToQuestion = {passDataToQuestion} id={question.node.id} key={question.node.id} questionNum={index}></QuestionBox>
  ))

  const onAnsweredQuestionList = e => {
    console.log("answered question array 000000000000000000 ", e)
  }

  const onRestart = () => {
    questionRef.current.foo();
  }

  return (
    <section class="text-gray-600 body-font">
      <div
        class="container px-5 py-24 mx-auto"
        style={{ border: "5px solid blue" }}
      >
        <div
          class="flex justify-between flex-wrap -mx-4  text-center"
          style={{ border: "5px solid brown" }}
        >
          <div>back to all tests</div>
          <div>Timer</div>
        </div>
        <div
          class="flex flex-wrap -mx-4 -mb-10 text-center"
          style={{ border: "5px solid yellow" }}
        >
          <div class="w-full lg:w-2/5 mb-10 px-4">
            <h1>Your progress</h1>
            <div
              class="flex justify-start gap-2 flex-wrap"
              style={{ border: "5px solid red" }}
            >
              {defaultQuestionList}
            </div>
            <button onClick={onRestart} class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Restart
            </button>
          </div>
          <div class="w-full lg:w-3/5 mb-10 px-4">
            <div class="rounded-lg  bg-red-100">
              <Question
                ref={questionRef} 
                questions={props.questions}
                onAnsweredQuestionList={onAnsweredQuestionList}
              ></Question>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuestionContainer
