import { useState } from 'react';
import data from './data';
import Questions from './components/Questions';
function App() {
  const [questions, setQuestions] = useState(data);
  const [activeID, setActiveID] = useState(null);

  const toggleActiveID = (id) => {
    const newActiveID = id === activeID ? null : id;
    setActiveID(newActiveID);
  };

  return (
    <main>
      <div className='section-center'>
        <h1 className='section-title'>Q&A Display</h1>
        <Questions
          questions={questions}
          activeID={activeID}
          toggleActiveID={toggleActiveID}
        />
      </div>
    </main>
  );
}

export default App;
