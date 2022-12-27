import React, { useState } from 'react';
import './CourseExample.css';

function CourseExample() {

  // states
  const [explanationVisible, setExplanationVisible] = useState(true);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // question declaration
  const explanation = "React is a JavaScript library for building user interfaces. It was developed by Facebook and is often used for building single-page applications and mobile applications.";
  const questions = [    {      id: 1,      text: "What is React used for?",      answers: [        { id: 1, text: "Building user interfaces" },        { id: 2, text: "Creating animations" },        { id: 3, text: "Managing databases" },        { id: 4, text: "All of the above" }      ],
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
    }
  ];

  function handleAnswerSelect(event) {
    setSelectedAnswer(event.target.value);
  }

  function handleExplanationClicked() {
    setExplanationVisible(false);
    setQuestionVisible(true);
  }

  function handleSolutionClicked() {
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

  const currentQuestionObject = questions[currentQuestion - 1];
  const currentQuestionText = currentQuestionObject.text;
  const currentAnswers = currentQuestionObject.answers;
  const currentCorrectAnswer = currentQuestionObject.correctAnswer;

  return (
    <div className="Course">
        <div className="Course-header">
        {questionVisible ? (
        <h3>Question</h3>
      ) : (
        <h3>Explanation</h3>
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
              <div key={answer.id}>
                <input
                  type="radio"
                  id={answer-answer.id}
                  value={answer.id}
                  checked={selectedAnswer === answer.id}
                  onChange={handleAnswerSelect}
                  disabled={showSolution ? true : false}
                />
                <label htmlFor={answer-answer.id}>{answer.text}</label>
              </div>
            ))}
          </form>
          {selectedAnswer && (
            <div>
              <button onClick={handleSolutionClicked}>See Solution</button>
              {showSolution && (
                <div>
                  {selectedAnswer == questions[currentQuestion - 1].correctAnswer ? (
                    <p>Correct!</p>
                  ) : (
                    <p>Incorrect. The correct answer is: {questions[currentQuestion - 1].answers[questions[currentQuestion - 1].correctAnswer - 1].text}</p>
                  )}
                </div>
              )}
            </div>
          )}
          {currentQuestion < questions.length && (
            <button onClick={handleNextQuestionClicked}>Next Question</button>
          )}
          {currentQuestion == questions.length && (
            <div>
              <p>Your score is: {score}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

}

export default CourseExample;
