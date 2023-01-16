import React, { useState } from 'react';
import './CourseExample.css';
import { useNavigate } from 'react-router-dom';


function CourseExample() {

  // states
  const [explanationVisible, setExplanationVisible] = useState(true);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

    // navigation
    const navigate = useNavigate();

  // question declaration
  const explanation = "React is a JavaScript library for building user interfaces. It was developed by Facebook and is often used for building single-page applications and mobile applications.";
  const questions = [    {      
    id: 1,      
    text: "What is React used for?",      
    answers: [        
        { id: 1, text: "Building user interfaces" },        
        { id: 2, text: "Creating animations" },        
        { id: 3, text: "Managing databases" },        
        { id: 4, text: "All of the above" }      
    ],
    correctAnswer: 1
    },
    {
      id: 2,
      text: "What is a single-page application?",
      answers: [
        { id: 1, text: "An application that loads a single HTML page and all necessary assets upfront" },
        { id: 2, text: "An application that loads a new HTML page for each view or action" },
        { id: 3, text: "An application that loads all necessary assets on the first page load and then updates the page dynamically as the user interacts with it" },
        { id: 4, text: "An application that loads the necessary assets for each view or action as the user navigates to them" }
      ],
      correctAnswer: 3
    },
    {
    id: 1,      
    text: "What is React used for?",      
    answers: [        
        { id: 1, text: "Building user interfaces" },        
        { id: 2, text: "Creating animations" },        
        { id: 3, text: "Managing databases" },        
        { id: 4, text: "All of the above" }      
    ],
    correctAnswer: 1
    }
  ];

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
    navigate('/Result');
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
          <button className='btn-action' onClick={handleExplanationClicked}>Continue</button>
        </div>
      )}
      {questionVisible && (
        <div>
          <p>{questions[currentQuestion - 1].text}</p>
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
              <button disabled={showSolution} onClick={handleSolutionClicked}>See Solution</button>
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


/* write a funcional component with a form that the user can create a new course with an explanation and multiple questions and answers. The user should be able to add and delete questions and answers. The user should be able to save the course and then see the course in the list of courses. */

function CourseForm() {
  
  const [explanation, setExplanation] = useState('');
  const [questions, setQuestions] = useState([{ id: 1, text: '', answers: [{ id: 1, text: '' }, { id: 2, text: '' }] }]);

}