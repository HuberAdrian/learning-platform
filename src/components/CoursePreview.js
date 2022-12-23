import React from 'react'
import { useNavigate } from 'react-router-dom'

function CoursePreview(props) {

    const { navigate } = useNavigate();
    const { link } = props;

    const onClickCourse = () => {
        navigate(link);
    }

  return (
    <div className='azubi-courses' onClick={onClickCourse}  >
          <h3>Kurs 1</h3>
          <p>bla bla bla</p>
        </div>
  )
}

export default CoursePreview