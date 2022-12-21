import React from 'react'
import { useNavigate } from 'react-router-dom'
import './../App.css'

function Person() {

    const navigate = useNavigate();

    // go back to the home page
    const onClickClose = () => {
        navigate('/');
    }

    const onClickAzubi = () => {
        navigate('/Azubi');
    }

    const onClickAusbilder = () => {
        navigate('/Ausbilder');
    }


    return (
        <>  
        <button onClick={onClickClose} className='test-close' >X</button>
        <div className='test-container'>
            <h1 className='grid-test test-header' >Testen als...</h1>
            <button onClick={onClickAzubi}  className='grid-test test-teacher' >Azubi</button>
            <button onClick={onClickAusbilder} className='grid-test test-student' >Ausbilder</button>
        </div>
        </>
    )
}

export default Person