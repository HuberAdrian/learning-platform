import React from 'react'
import { useNavigate } from 'react-router-dom'
import './../App.css'
import ButtonGoBack from './ButtonGoBack';

function Person({goback= true}) {

    const navigate = useNavigate();

    const onClickAzubi = () => {
        navigate('/Azubi');
    }

    const onClickAusbilder = () => {
        navigate('/Ausbilder');
    }


    return (
        <>  
        {goback && <ButtonGoBack />}
        <div className='test-container'>
            <h1 className='grid-test test-header' >Testen als...</h1>
            <button onClick={onClickAzubi}  className='grid-test test-teacher' >Azubi</button>
            <button onClick={onClickAusbilder} className='grid-test test-student' >Ausbilder</button>
        </div>
        </>
    )
}

export default Person