import React from 'react';
import ProgressBar from 'react-animated-progress-bar';

const Student = ({ name, online, score }) => {
  let status;
  if (online) {
    status = "Online";
  } else {
    status = "Offline";
  }

  return (
    <div className='student-container' >
      <h3>{name}</h3>
      <p>Online Status: {status}</p>
      <ProgressBar width="150" trackWidth="13" height="150" percentage={score} />
    </div>
  );
};

export default Student;