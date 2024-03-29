import React from 'react'
import './App.css';
import { IoIosCloseCircle, IoIosCheckmarkCircle, IoIosInformationCircleOutline,  } from 'react-icons/io';





function Content() {

    // make a info sign with a hover effect that shows a description of the content

  return (
    <>
    <div className="content-container">
    <h1>Inhalt & Vergleich</h1>
    <p>Here you can find a comparison of the content and functionality of this platform to another platform</p>
    <h3>Inhalte</h3>
    <table className='table-content' >
        <tr>
            <th className='table-header' ></th>
            <th className='table-header' >metall-ausbildung</th>
            <th className='table-header' >andere Plattformen</th>
        </tr>
        <tr>
            <td >Interaktives Lernen{/* <IoIosInformationCircleOutline className='info-1' /><p className='info-text' >This is a info sample</p>*/} </td>
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
        <tr>
            <td >Kosten</td>
            <td >Selbstkosten (~5€ / Azubi) </td>
            <td >0€</td>
        </tr>
    </table>
    <h3>Funktionalität</h3>
    <table className='table-content' >
        <tr>
            <th className='table-header' ></th>
            <th className='table-header' >metall-ausbildung</th>
            <th className='table-header' >andere Plattformen</th>
        </tr>
        <tr>
            <td >Eigene Inhalte hochladen</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
        </tr>
        <tr>
            <td >Statistiken über einzelne Azubis</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
        </tr>
        <tr>
            <td >Offlinefähig</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
        </tr>
        <tr>
            <td >Chatfunktion</td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
            <td ><IoIosCheckmarkCircle className='ioIosCheckmarkCircle' /></td>
        </tr>
    </table>
    </div>
    </>
    )
}

export default Content