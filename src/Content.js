import React from 'react'
import './App.css';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';





function Content() {

  return (
    <>
    <div className="content-container">
    <h1>Content</h1>
    <p>Here you can find a comparison of the content and functionality of this platform to another platform</p>
    <table className='table-content' >
        <tr>
            <th className='table-header' ></th>
            <th className='table-header' >Platform 1</th>
            <th className='table-header' >Platform 2</th>
        </tr>
        <tr>
            <td >Interaktives Lernen</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>
        <tr>
            <td >Quiz</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>
        <tr>
            <td >Quiz</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>
        <tr>
            <td >Quiz</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>
        <tr>
            <td >Quiz</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>
        <tr>
            <td >Quiz</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>

    </table>
    </div>
    </>
    )
}

export default Content