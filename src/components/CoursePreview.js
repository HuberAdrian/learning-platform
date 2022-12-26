import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function CoursePreview(props) {

    const { link } = props;

  return (
    <Link to={link}>
    <div className='azubi-courses'>
          <h3>Kurs 1</h3>
          <p>bla bla bla</p>
        </div>
    </Link>
  )
}

export default CoursePreview