import React, { useState } from 'react'
import Quiz from './Components/Quiz';

function App() {

  const [questions] = useState([
    {
      question: 'Qui a remplacé Sasuke dans l\'équipe 7 ?',
      reponse1: 'Yamato',
      reponse2: 'Saï',
      reponse3: 'Kiba'
    },
    {
      question: 'Comment s\'appelle la grand mère de Sasori ?',
      reponse1: 'Amané',
      reponse2: 'Tsunade',
      reponse3: 'Chiyo'
    },
    {
      question: 'Quel animal peut invoquer Naruto ?',
      reponse1: 'Des grenouilles',
      reponse2: 'Des serpents',
      reponse3: 'Des aigles'
    }
  ])

  const [index, setIndex] = useState(0)

  const [score, setScore] = useState(0)

  function sendAnswer() {
    setIndex(index + 1)
  }

  function restart() {
    setIndex(0)
    setScore(0)
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
              nbQuestions={questions.length} 
              reponse1={questions[index].reponse1}
              reponse2={questions[index].reponse2}
              reponse3={questions[index].reponse3}
              index={index} />
            <button onClick={sendAnswer}>send answer</button>
          </div>
          ) : (
          <div className='score'>
            <div>
              <p>Votre score {score}</p>
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
