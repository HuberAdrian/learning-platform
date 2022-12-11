import React from 'react'
import './App.css';

function Content() {

    // make a functional component called Content that returns the following:
    // a table with 3 columns that compare the content and functionality of this platform to another platform 

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
            <td>Math</td>
            <td>Math is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</td>
            <td>Math is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</td>
        </tr>
        <tr>
            <td>English</td>
            <td>English is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</td>
            <td>English is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</td>
        </tr>
        <tr>
            <td>Technology</td>
            <td>Technology is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</td>
            <td>Technology is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</td>
        </tr>
    </table>
    </>
    )
}

export default Content