import React, {useState} from 'react'
import CreateCourse from './components/CreateCourse'
import './components/AusbilderStart.css'
import ButtonGoBack from './components/ButtonGoBack'
import Student from './components/Student'
import Footer from './components/Footer';
import NavbarAzubi from './components/NavbarAzubi'

function Ausbilder() {

  const [isOpen, setIsOpen] = useState(false);

  const students = [
    { name: "Max Mustermann", online: true, score: "87" },
    { name: "Maria Müller", online: false, score: "92" },
    { name: "Hans Hofmann", online: true, score: "33" },
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
    <NavbarAzubi />

    <div className='ausbilder-container' >
    <h1 className='azubi-title'>Ausbilder</h1>
    <div>
      <button className='select-class-btn' onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <ul>
          <li>1. Lehrjahr</li>
          <li>2. Lehrjahr</li>
          <li>3. Lehrjahr</li>
          <li>4. Lehrjahr</li>
        </ul>
      )}
    </div >
      {students.map((student, index) => (
        <Student key={index} name={student.name} online={student.online} score={student.score} />
      ))}
    </div>
    <ButtonGoBack />
    <CreateCourse />
    <Footer />
    </>
  )
}

export default Ausbilder


// create a toggle buttton to switch between the classes of the students