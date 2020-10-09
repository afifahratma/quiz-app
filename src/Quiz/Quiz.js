import React, { useState } from 'react'
import './Quiz.css'

const Quiz = () => {
    const questions = [
        {
            questionText: 'HTML Merupakan singkatan dari... ',
            answerOption : [
                { answer: 'Hypertest Markup Language', isCorrect: false},
                { answer : 'Hypertool Markup Language', isCorrect: false},
                { answer: 'Hypertext Markup Language', isCorrect: true},
                { answer : 'Hyperlink Markup Language', isCorrect: false}
            ]
        },
        {
            questionText: 'Perintah untuk mengganti baris pada HTML adalah...',
            answerOption : [
                { answer: '<br>', isCorrect: true},
                { answer : '<p>', isCorrect: false},
                { answer: '<td>', isCorrect: false},
                { answer : '<hr>', isCorrect: false}
            ]
        },
        {
            questionText: 'Type form HTML untuk menerima masukan berupa pilihan, dan pilihan yang dapat dipilih bisa lebih dari satu adalah',
            answerOption : [
                { answer: 'Password', isCorrect: false},
                { answer : 'Submit', isCorrect: false},
                { answer: 'Radio', isCorrect: false},
                { answer : 'Checkbox', isCorrect: true}
            ]
        },
        {
            questionText: 'CSS merupakan singkatan dari...',
            answerOption : [
                { answer: 'Cascading Sensitive Sheet', isCorrect: false},
                { answer : 'Cascading Style Sheet', isCorrect: true},
                { answer: 'Code Style Sheet', isCorrect: false},
                { answer : 'Case Style Sheet', isCorrect: false}
            ]
        },
        {
            questionText: 'Berikut ini yang tidak termasuk dari jenis CSS adalah...',
            answerOption : [
                { answer: 'Inline Style Sheet', isCorrect: false},
                { answer : 'Outline Style Sheet', isCorrect: true},
                { answer: 'Internal Style Sheet', isCorrect: false},
                { answer : 'Eksternal Style Sheet', isCorrect: false}
            ]
        }
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    // const [startQuiz, setStartQuiz] = useState(true)

    // const handleStartQuiz = () => {
    //     setStartQuiz(true)
    // }
    const playAgain = () => {
        if (showScore !== true) {
            
        }
    }
    const handleClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1
        if(nextQuestion < questions.length){
          setCurrentQuestion(nextQuestion)  
        } else {
            setShowScore(true)
        }
    }
    
    return(
        <div className="container">
            
            {/* <div>
                <button onClick={handleStartQuiz}>mulai Quiz</button>
            </div> */}
            {
                showScore ? (
                    <div className="score-result">
                    <b  style={{color: "#309135"}}> Jumlah Benar {score}</b><br/>
                    <b  style={{color:'red'}}>Jumlah Salah {questions.length - score}</b><br/>
                    <b>Total Nilai : {score*2}</b>

                    <button>Mulai lagi</button>
                    </div>
                ) : (
                   
            <div className="content">
                <h2 style={{textAlign: 'center'}}>Pertanyaan {currentQuestion + 1}</h2>

                <h5>{questions[currentQuestion].questionText}</h5>
            {
                questions[currentQuestion].answerOption.map((item) =>{
                    return(
                        <div>
                            <button className="button-answer" onClick={() => handleClick(item.isCorrect)}>{item.answer}</button>
                        </div>
                    )
                    
                })
                
            }

            
            </div>
            )
            
        }
        </div>
                
        
    )
}

export default Quiz