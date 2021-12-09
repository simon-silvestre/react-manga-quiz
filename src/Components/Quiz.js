import React from 'react'

function Quiz({ question, nbQuestions, A, B, C, select, setSelect, index }) {
    return (
        <div className="quiz">
            <p className="grey">Question {index + 1} ({nbQuestions} restantes )</p>
            <p className="questions">{question}</p>
            <p className="grey">Réponses :</p>
            <div className="reponses">
                <p className={select === 'A' ? 'active' : ''} onClick={() => setSelect('A')}><span>A</span>{ A }</p>
                <p className={select === 'B' ? 'active' : ''} onClick={() => setSelect('B')}><span>B</span>{ B }</p>
                <p className={select === 'C' ? 'active' : ''} onClick={() => setSelect('C')}><span>C</span>{ C }</p>
            </div>
        </div>
    )
}

export default Quiz
