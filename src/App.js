import React, { useState } from 'react'
import Quiz from './Components/Quiz';

function App() {

  const [questions] = useState([
    {
      question: 'Qui a remplacé Sasuke dans l\'équipe 7 ?',
      A: 'Yamato',
      B: 'Saï',
      C: 'Kiba'
    },
    {
      question: 'Comment s\'appelle la grand mère de Sasori ?',
      A: 'Amané',
      B: 'Tsunade',
      C: 'Chiyo'
    },
    {
      question: 'Quel animal peut invoquer Naruto ?',
      A: 'Des grenouilles',
      B: 'Des serpents',
      C: 'Des aigles'
    }
  ])

  const [reponses] = useState(['B', 'C', 'A'])

  const [index, setIndex] = useState(0)

  const [score, setScore] = useState(0)

  const [nbQuestions, setNbQuestions] = useState(questions.length)

  const [select, setSelect] = useState('A')

  function sendAnswer() {
    if(select === reponses[index]) {
      setScore(score + 1)
    }
  
    setIndex(index + 1)
    setNbQuestions(nbQuestions - 1)
    setSelect('A')
  }

  function restart() {
    setIndex(0)
    setScore(0)
    setNbQuestions(questions.length)
  }

  return (
    <div className="App">
      <div className="quizContainer">
        <div className="header"></div>
        <div className="main">
          {(index < questions.length) ? (
          <div>
            <Quiz 
              question={questions[index].question} 
              nbQuestions={nbQuestions} 
              A={questions[index].A}
              B={questions[index].B}
              C={questions[index].C}
              select={select}
              setSelect={setSelect}
              index={index} />
            <button onClick={sendAnswer}>send answer</button>
          </div>
          ) : (
          <div className='score'>
            <div>
              <p>Votre score {score} / {questions.length}</p>
              <button onClick={restart}>réessayer ?</button>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
