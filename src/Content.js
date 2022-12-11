import React from 'react'
import './App.css';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';





function Content() {

    // make a functional component called Content that returns the following:
    // a table with 3 columns that compare the content and functionality of this platform to another platform 
    // platform 1 has a quizfunctionality, platfrom 2 has not 
    // platform 1 should have a checkmark in the quiz column, platform 2 should have a cross


  return (
    <>
    <h1>Content</h1>
    <p>Here you can find a comparison of the content and functionality of this platform to another platform</p>
    <table>
        <tr>
            <th></th>
            <th>Platform 1</th>
            <th>Platform 2</th>
        </tr>
        <tr>
            <td className='quiz'>Quiz</td>
            <td className='quiz'><IoIosCheckmarkCircle /></td>
            <td className='quiz'><IoIosCloseCircle /></td>
        </tr>
        <tr>
            <td className='quiz'>Quiz</td>
            <td className='quiz'><IoIosCheckmarkCircle /></td>
            <td className='quiz'><IoIosCloseCircle /></td>
        </tr>
        <tr>
            <td className='quiz'>Quiz</td>
            <td className='quiz'><IoIosCheckmarkCircle /></td>
            <td className='quiz'><IoIosCloseCircle /></td>
        </tr>
        <tr>
            <td className='quiz'>Quiz</td>
            <td className='quiz'><IoIosCheckmarkCircle /></td>
            <td className='quiz'><IoIosCloseCircle /></td>
        </tr>
        <tr>
            <td className='quiz'>Quiz</td>
            <td className='quiz'><IoIosCheckmarkCircle /></td>
            <td className='quiz'><IoIosCloseCircle /></td>
        </tr>
        <tr>
            <td className='quiz'>Quiz</td>
            <td className='quiz'><IoIosCheckmarkCircle /></td>
            <td className='quiz'><IoIosCloseCircle /></td>
        </tr>

    </table>
    </>
    )
}

export default Content