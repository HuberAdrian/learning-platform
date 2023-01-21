import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function CoursePreview(props) {
  const { link, courseName, image, description } = props;

return (
  <Link to={link}>
    <div className='azubi-courses'>
        <img src={image} alt={courseName}/>
        <h3 className="course-name">{courseName}</h3>
        <p>{description}</p>
    </div>
    </Link>
)
}

export default CoursePreview
