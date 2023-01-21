import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function CoursePreview(props) {
  const { link, courseName, bgColor } = props;

return (
  <Link to={link}>
  <div className={`azubi-courses ${bgColor}`}>
        <h3 className="course-name">{courseName}</h3>
        <p>bla bla bla</p>
      </div>
  </Link>
)
}
