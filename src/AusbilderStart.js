import React from 'react'
import CreateCourse from './components/CreateCourse'
import './components/AusbilderStart.css'
import ButtonGoBack from './components/ButtonGoBack'
import Student from './components/Student'

function Ausbilder() {

  const students = [
    { name: "Max Mustermann", online: true, score: "87" },
    { name: "Maria Müller", online: false, score: "92" },
    { name: "Hans Hofmann", online: true, score: "75" },
    { name: "Andrea Schmidt", online: true, score: "83" },
    { name: "Sophie Bauer", online: false, score: "90" },
    { name: "Stefanie Keller", online: true, score: "88" },
    { name: "Lars Petersen", online: true, score: "43" },
    { name: "Jasmin Wagner", online: false, score: "91" },
    { name: "Kerstin Schmitz", online: true, score: "55" },
    { name: "Timo Meyer", online: true, score: "80" },
  ];

  return (
    <>
    <div>
      {students.map((student, index) => (
        <Student key={index} name={student.name} online={student.online} score={student.score} />
      ))}
    </div>
    <ButtonGoBack />
    <div>Ausbilder</div>
    <CreateCourse />
    </>
  )
}

export default Ausbilder