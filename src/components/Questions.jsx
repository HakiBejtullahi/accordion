import React from 'react';
import Question from './Question';

const Questions = ({ activeID, toggleActiveID, questions }) => {
  return (
    <div className='questions-container'>
      {questions.map((question) => {
        return (
          <Question
            activeID={activeID}
            toggleActiveID={toggleActiveID}
            {...question}
            key={question.id}
          />
        );
      })}
    </div>
  );
};

export default Questions;
