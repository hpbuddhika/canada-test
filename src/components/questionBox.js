import React from 'react';

const QuestionBox = (props) => {

    const onQuestion = (e) => {
        props.passDataToQuestion(e.props.id)
    }



    return (
        <div className="flex justify-center items-center w-10 h-10 bg-yellow-400 p-5" onClick = {() => onQuestion({props})}>
           { props.questionNum + 1 }
        </div>
    );
}

export default QuestionBox;
