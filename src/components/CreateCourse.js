import React, { useState } from 'react';

function CreateCourse() {
  const [course, setCourse] = useState({
    explanation: "",
    questions: [],
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  }

  const handleQuestionChange = (e, index) => {
    const newQuestions = [...course.questions];
    newQuestions[index][e.target.name] = e.target.value;
    setCourse({ ...course, questions: newQuestions });
  }

  const addQuestion = () => {
    setCourse({
      ...course,
      questions: [...course.questions, { text: "", answers: [], correctAnswer: "" }],
    });
  }

  const removeQuestion = (index) => {
    const newQuestions = [...course.questions];
    newQuestions.splice(index, 1);
    setCourse({ ...course, questions: newQuestions });
  }

  const addAnswer = (questionIndex) => {
    const newQuestions = [...course.questions];
    newQuestions[questionIndex].answers.push({ text: "" });
    setCourse({ ...course, questions: newQuestions });
  }

  const removeAnswer = (questionIndex, answerIndex) => {
    const newQuestions = [...course.questions];
    newQuestions[questionIndex].answers.splice(answerIndex, 1);
    setCourse({ ...course, questions: newQuestions });
  }

    const handleAnswerChange = (e, questionIndex, answerIndex) => {
    const newQuestions = [...course.questions];
    newQuestions[questionIndex].answers[answerIndex][e.target.name] = e.target.value;
    setCourse({ ...course, questions: newQuestions });
    }


  return (
    <form className="course-form container">
      <label>
        <h3>Erklärung: </h3>
        <textarea name="explanation" value={course.explanation} onChange={handleChange} />
      </label>
      {course.questions.map((question, questionIndex) => (
        <div className="question-container" key={questionIndex}>
          <label>
            <h3>------------------------</h3>
            <h3>Frage {questionIndex + 1}: </h3>
            <input name="text" value={question.text} onChange={(e) => handleQuestionChange(e, questionIndex)} />
          </label>
          <button className="remove-btn" type="button" onClick={() => removeQuestion(questionIndex)}>Frage löschen</button>
          {question.answers.map((answer, answerIndex) => (
            <div className="answer-container" key={answerIndex}>
              <label>
                <h3> Antwort {answerIndex + 1}: </h3>
                <input name="text" value={answer.text} onChange={(e) => handleAnswerChange(e, questionIndex, answerIndex)} />
              </label>
              <button className="remove-btn" type="button" onClick={() => removeAnswer(questionIndex, answerIndex)}>Antwort löschen</button>
            </div>
          ))}
          <button className="add-btn" type="button" onClick={() => addAnswer(questionIndex)}>Antwort hinzufügen</button>
          <label>
            <h3>richtige Antwort: </h3>
            <input
              name="correctAnswer"
              value={question.correctAnswer}
              onChange={(e) => handleQuestionChange(e, questionIndex)}
              />
            </label>
          </div>
        ))}
        <button className="add-btn" type="button" onClick={addQuestion}>Frage hinzufügen</button>
        <button className="sub-btn" type="submit">Kurs testen</button>
      </form>
    );

    }

    export default CreateCourse;