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
            <th className='table-header' >metall-ausbildung</th>
            <th className='table-header' >andere Plattformen</th>
        </tr>
        <tr>
            <td >Interaktives Lernen</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
        </tr>
        <tr>
            <td >Prüfungsvorbereitung</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
        </tr>
        <tr>
            <td >Wissensüberprüfung</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
        </tr>
        <tr>
            <td >Statistiken der einzelnen Azubis</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>
        <tr>
            <td >Prüfungssimulation</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>
        <tr>
            <td >Arbeiten mit Tabellenbuch</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>
        <tr>
            <td >Mehrspieler</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCloseCircle className='ioIosCloseCircle' /></td>
        </tr>

    </table>
    </div>
    </>
    )
}

export default Content