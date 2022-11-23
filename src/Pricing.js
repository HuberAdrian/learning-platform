import React from 'react'

function Pricing() {

    // make a pricing page with three different pricing options for the plans and a button to signup for the plans
    // every pricing option should have a header, a short list with courses that are included in a plan, a button to signup for the plans

    return (
        <div className="pricing">
            <div className="pricing__container">
                <div className="pricing__card">
                    <div className="pricing__cardInfo">
                        <div className="info__header">
                            <h3>Basic</h3>
                            <h4>$9.99</h4>
                            <p>per month</p>
                        </div>
                        <ul className="info__ul">
                            <li>10 Courses</li>
                            <li>10 Projects</li>
                            <li>10 Quizzes</li>
                        </ul>
                        <button className="pricing__button">Sign Up</button>
                    </div>
                </div>
                <div className="pricing__card">
                    <div className="pricing__cardInfo">
                        <div className="info__header">
                            <h3>Standard</h3>
                            <h4>$19.99</h4>
                            <p>per month</p>
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
                            <p>per month</p>
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
        </div>
    )
}

export default Pricing

