import React from 'react'
import { useNavigate } from 'react-router-dom'
import './../App.css'

function Person() {

    const navigate = useNavigate();

    // go back to the home page
    const onClickClose = () => {
        navigate('/');
    }

    return (
        <>  
        <div className='test-container'>
            <button onClick={onClickClose} className='test-close' >X</button>
            <button className='test-teacher' >Teacher</button>
            <button className='test-student' >Student</button>
        </div>
        </>
    )
}

export default Person