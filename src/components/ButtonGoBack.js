import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ButtonGoBack.css'


function ButtonGoBack() {

    const navigate = useNavigate();

    // go back to the home page
    const onClickClose = () => {
        navigate('/');
    }

  return (
    <button onClick={onClickClose} className='test-close' >X</button>
  )
}

export default ButtonGoBack