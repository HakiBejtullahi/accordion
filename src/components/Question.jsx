import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Question = ({ title, id, info, activeID, toggleActiveID }) => {
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn-icon'
          onClick={() => {
            toggleActiveID(id);
          }}
        >
          {activeID === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {activeID === id ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
