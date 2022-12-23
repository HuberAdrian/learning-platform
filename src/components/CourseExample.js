import React, { useState } from 'react';

function CourseExample() {
const [explanationVisible, setExplanationVisible] = useState(true);
const [questionVisible, setQuestionVisible] = useState(false);
const [selectedAnswer, setSelectedAnswer] = useState(null);

const explanation = "React is a JavaScript library for building user interfaces. It was developed by Facebook and is often used for building single-page applications and mobile applications.";
const question = "What is React used for?";
const answers = [
{ id: 1, text: "Building user interfaces" },
{ id: 2, text: "Creating animations" },
{ id: 3, text: "Managing databases" },
{ id: 4, text: "All of the above" }
];

function handleAnswerSelect(event) {
setSelectedAnswer(event.target.value);
}

return (
<div className="Course">
{explanationVisible && (
<div>
<p>{explanation}</p>
<button onClick={() => setExplanationVisible(false)}>Continue</button>
</div>
)}
{questionVisible && (
<div>
<p>{question}</p>
<form>
    {answers.map(answer => (
    <div key={answer.id}>
     <input
        type="radio"
        id={answer-${answer.id}}
        value={answer.id}
        checked={selectedAnswer === answer.id}
        onChange={handleAnswerSelect}
     />
    <label htmlFor={answer-${answer.id}}>{answer.text}</label>
    </div>
    ))}
</form>
</div>
)}
</div>
);
}

export default CourseExample;