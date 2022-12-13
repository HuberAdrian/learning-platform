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
        <button onClick={onClickClose} className='test-close' >X</button>
        <div className='test-container'>
            <h1 className='grid-test test-header' >Testen als...</h1>
            <button className='grid-test test-teacher' >Teacher</button>
            <button className='grid-test test-student' >Student</button>
        </div>
        </>
    )
}

export default Person