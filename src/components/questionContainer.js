import React from 'react';
import Question from './question';


const QuestionContainer = (props) => {
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto" style={{border:"5px solid blue"}}>
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="w-full lg:w-2/5 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
              <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
            <div class="w-full lg:w-3/5 mb-10 px-4">
              <div class="rounded-lg  bg-red-100">
                <Question questions = {props.questions}></Question>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default QuestionContainer;