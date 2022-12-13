import React from 'react'
import { useNavigate } from 'react-router-dom'

function Person() {
    
    const navigate = useNavigate();

    // go back to the home page
    const onClickClose = () => {
        navigate('/');
    }

    return (
        <>
            <button onClick={onClickClose} className='test-close' >X</button>
            <button className='test-teacher' >Teacher</button>
            <button className='test-student' >Student</button>
        </>
    )
}

export default Person