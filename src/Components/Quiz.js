import React from 'react'

function Quiz({ question, nbQuestions, reponse1, reponse2, reponse3, index }) {
    return (
        <div className="quiz">
            <p className="grey">Question {index + 1} ({nbQuestions} restantes )</p>
            <p className="questions">{question}</p>
            <p className="grey">Réponses :</p>
            <div className="reponses">
                <p><span>A</span>{ reponse1 }</p>
                <p><span>B</span>{ reponse2 }</p>
                <p><span>C</span>{ reponse3 }</p>
            </div>
        </div>
    )
}

export default Quiz
