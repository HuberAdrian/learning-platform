import React from 'react'

function Pricing() {

    // add a pricing page with a button to signup
    // make an tabular overview of the pricing for the courses with comparison

    return (
        <div className="pricing">
            <div className="pricing__container">
                <div className="pricing__card">
                    <div className="pricing__cardInfo">
                        <div className="info__header">
                            <h3>Basis</h3>
                            <h4>$9.99</h4>
                            <p>pro Monat / Azubi</p>
                        </div>
                        <ul className="info__ul">
                            <li>10 Courses</li>
                            <li>10 Projects</li>
                            <li>10 Quizzes</li>
                        </ul>
                        <button className="pricing__button">Mehr></button>
                    </div>
                </div>
                <div className="pricing__card">
                    <div className="pricing__cardInfo">
                        <div className="info__header">
                            <h3>Standard</h3>
                            <h4>$19.99</h4>
                            <p>pro Monat / Azubi</p>
                        </div>
                        <ul className="info__ul">
                            <li>20 Courses</li>
                            <li>20 Projects</li>
                            <li>20 Quizzes</li>
                        </ul>
                        <button className="pricing__button">Sign Up</button>
                    </div>
                </div>
                <div className="pricing__card">
                    <div className="pricing__cardInfo">
                        <div className="info__header">
                            <h3>Premium</h3>
                            <h4>$29.99</h4>
                            <p>pro Monat / Azubi</p>
                        </div>
                        <ul className="info__ul">
                            <li>30 Courses</li>
                            <li>30 Projects</li>
                            <li>30 Quizzes</li>
                        </ul>
                        <button className="pricing__button">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="pricing__overview">
                <h1>Pricing Overview</h1>
                <table className='pricing__table'>
                    <tr>
                        <th></th>
                        <th>Basic</th>
                        <th>Standard</th>
                        <th>Premium</th>
                    </tr>
                    <tr>
                        <th>Pricing</th>
                        <td>$9.99</td>
                        <td>$19.99</td>
                        <td>$29.99</td>
                    </tr>
                    <tr>
                        <th>Courses</th>
                        <td>10 Courses</td>
                        <td>20 Courses</td>
                        <td>30 Courses</td>
                    </tr>
                    <tr>
                        <th>Prüfungsvorbereitung</th>
                        <td>10 Projects</td>
                        <td>20 Projects</td>
                        <td>30 Projects</td>
                    </tr>
                    <tr>
                        <th>Quizzes</th>
                        <td>10 Quizzes</td>
                        <td>20 Quizzes</td>
                        <td>30 Quizzes</td>
                    </tr>
                </table>
             </div>
    </div>
    )
}

export default Pricing

