import React, { useState } from 'react';
import './CourseExample.css';
import { useNavigate } from 'react-router-dom';
import frage1 from '../images/frage1.png';
import frage2 from '../images/frage2.png';


function CourseExample({course}) {
  console.log(course);
  let explanation;
  let questions;

  // assign course data to variables
  if (course) {

    explanation = course.explanation;
    questions = course.questions;

  }
  else {

  explanation = "In den folgenden Fragen werden Sie aufgefordert, die richtige Drehrichtung des angegeben Zahnrads auszuwählen.";
  questions = [    {      
    id: 1,      
    text: "Welche Aussage ist richtig?",
    image: frage1,
    answers: [        
        { id: 1, text: "Rad 2 dreht sich schneller als Rad 1 und mit dem Uhrzeigersinn" },        
        { id: 2, text: "Rad 2 dreht sich langsamer als Rad 1 und gegen den Uhrzeigersinn" },        
        { id: 3, text: "Rad 1 dreht sich langsamer als Rad 2" },        
        { id: 4, text: "Rad 2 dreht sich so schnell wie Rad 1 und mit dem Uhrzeigersinn." }      
    ],
    correctAnswer: 1
    },
    {
      id: 2,
      text: "Welche Räder drehen in dieselbe Richtung wie Rad 1?",
      image: frage2,
      answers: [
        { id: 1, text: "3, 5 und 7" },
        { id: 2, text: "6 und 4" },
        { id: 3, text: "3 und 5" },
        { id: 4, text: "Das System funktioniert nicht" }
      ],
      correctAnswer: 4
    },
    {
    id: 1,      
    text: "Welche Aussage ist richtig?",
    answers: [        
        { id: 1, text: "Die Winkeländerung bei aneinander liegenden Zahnrädern ist gleich" },        
        { id: 2, text: "Die Übersetzung ist das Verhältnis der Anzahl der Zähne von zwei Zahnräder" },        
        { id: 3, text: "Die Übersetzung ist das Verhältnis der Drehmomente von zwei Zahnräder" },        
        { id: 4, text: "Alle genannten Aussagen sind richtig" }      
    ],
    correctAnswer: 4
    }
  ];
  }


  // states
  const [explanationVisible, setExplanationVisible] = useState(true);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

    // navigation
    const navigate = useNavigate();


  function handleAnswerSelect(event) {
    setSelectedAnswer(event.target.value);
    console.log(event.target.value);
  }

  function handleExplanationClicked() {
    setExplanationVisible(false);
    setQuestionVisible(true);
  }

  function handleSolutionClicked() {
    console.log(selectedAnswer);
    console.log(questions[currentQuestion - 1].correctAnswer);
    setShowSolution(true);
    // increment score if the selected answer is correct
    if (selectedAnswer == questions[currentQuestion - 1].correctAnswer) {
        setScore(score + 1);
        }
  }

  function handleNextQuestionClicked() {
    if (currentQuestion === questions.length) {
      // All questions have been answered, so display a message or do something else
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowSolution(false);
  }

  function handleFinishCourseClicked() {
    // go to the result page
    navigate('/');
  }



  return (
    <div className="Course">
        <div className="Course-header">
        {questionVisible ? (
        <h3>Frage</h3>
      ) : (
        <h3>Erklärung</h3>
      )}
        </div>
      {explanationVisible && (
        <div>
          <p>{explanation}</p>
          <button className='btn-action' onClick={handleExplanationClicked}>Weiter</button>
        </div>
      )}
      {questionVisible && (
        <div>
          <p>{questions[currentQuestion - 1].text}</p>
          {questions[currentQuestion - 1].image &&
          <img src={questions[currentQuestion - 1].image} alt="Frage" className='question-image' /> }
          <form>
            {questions[currentQuestion - 1].answers.map(answer => (
              <div key={answer.id} >
                <input
                  type="radio"
                  value={answer.id}
                  id={answer.id}
                  checked={selectedAnswer == answer.id}
                  onChange={handleAnswerSelect}
                  disabled={showSolution ? true : false}
                />
                <label htmlFor={answer.id}>{answer.text}</label>
              </div>
            )
            ) }
          </form>
          {selectedAnswer && (
            <div>
              <button disabled={showSolution} onClick={handleSolutionClicked}>Lösung anzeigen</button>
              {showSolution && (
                <div>
                  {selectedAnswer == questions[currentQuestion - 1].correctAnswer ? (
                    <p>Richtig!</p>
                  ) : (
                    <p>Falsch! Die richtige Antwort ist: "{questions[currentQuestion - 1].answers[questions[currentQuestion - 1].correctAnswer - 1].text}"</p>
                  )}
                </div>
              )}
            </div>
          )}
          {currentQuestion < questions.length ? (
            <button disabled={showSolution ? false : true} onClick={handleNextQuestionClicked}>Next Question</button>
          )
            : (<button onClick={handleFinishCourseClicked} > Kurs beenden </button>)
          }
            <div>
              <p>Du hast {score} von {questions.length} richtig beantwortet </p>
            </div>
        </div>
      )}
    </div>
  );

}

export default CourseExample;
