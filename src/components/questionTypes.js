import React from "react"
import { navigate } from "gatsby"

import Dropdown from "./dropdown"

const QuestionTypes = (props) => {

  const toQuiz = props => {
    navigate("/quiz")
  }


  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="mb-10">
          <h1 class="text-3xl pb-5 ">ONLINE CITIZENSHIP QUIZ</h1>
          <p class="text-2xl ">
            Test yourself by taking our online Canadian citizenship quiz. Earn a
            badge for taking your first quiz. Earn another for getting 100% on a
            quiz. Get a third badge by finishing a quiz in 15 minutes with a
            score of 100%. Good luck!
          </p>
        </div>
        <div class="flex flex-wrap -mx-4 -mb-10 text-start">
          <div class="sm:w-1/2 mb-10 px-4">
            {/* <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501">
          </div> */}
            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              TIMED QUIZ
            </h2>
            <p class="leading-relaxed text-base">
              20 questions, 30 minutes. This quiz mimics the actual citizenship
              test.
            </p>
            <Dropdown></Dropdown>
            <button onClick={()=> toQuiz(props)} class="flex  mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Start
            </button>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            {/* <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502">
          </div> */}
            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              The Catalyzer
            </h2>
            <p class="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button class="btn btn-primary">DaisyUI Button</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuestionTypes
