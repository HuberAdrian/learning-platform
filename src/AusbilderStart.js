import React, {useState} from 'react'
import CreateCourse from './components/CreateCourse'
import './components/AusbilderStart.css'
import ButtonGoBack from './components/ButtonGoBack'
import Student from './components/Student'
import Footer from './components/Footer';
import NavbarAzubi from './components/NavbarAzubi'
import CoursePreview from './components/CoursePreview';
// import images
import math from './images/mathematik.png';
import technical_mechanic from './images/technische-mechanik.png';
import electronic from './images/elektrotechink.png';
import physic from './images/physik.png';

function Ausbilder() {

   // scroll to top of page when component mounts
   React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    <h2 className='azubi-subtitle'>Übersicht 4. Lehrjahr</h2>
    <div>
      <button className='select-class-btn' onClick={() => setIsOpen(!isOpen)}>Lehrjahr wählen</button>
      {isOpen && (
        <ul className='wahl-lehrjahr' >
          <li className='wahl-lehrjahr-li' >1. Lehrjahr</li>
          <li className='wahl-lehrjahr-li' >2. Lehrjahr</li>
          <li className='wahl-lehrjahr-li' >3. Lehrjahr</li>
          <li className='wahl-lehrjahr-li' >4. Lehrjahr</li>
        </ul>
      )}
    </div >
      {students.map((student, index) => (
        <Student key={index} name={student.name} online={student.online} score={student.score} />
      ))}

    <ButtonGoBack />
    <h2 className='azubi-subtitle'>Kurs bearbeiten</h2>
      <div className='container-azubi-courses' >
        <CoursePreview courseName ={"Technische Mechanik"} description={"Drehrichtung von Zahnräder"} image={technical_mechanic} link='/KursBsp1' />
        <CoursePreview courseName ={"Mathematik"} description={"Differentialrechnung"} image={math} link='/KursBsp1' />
        <CoursePreview courseName ={"Elektrotechnik"}  description={"Elektrische Felder"} image={electronic} link='/KursBsp1' />
        <CoursePreview courseName ={"Physik"} description={"Schwingungen"} image={physic} link='/KursBsp1' />
      </div>
    <h2 className='azubi-subtitle'>Kurs erstellen</h2>
    <CreateCourse />
    </div>
    <Footer />
    </>
  )
}

export default Ausbilder


// create a toggle buttton to switch between the classes of the students