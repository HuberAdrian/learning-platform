import React from 'react'

function Login() {
    // make a login page with a form to login with email and password
    // make a button to signup
    // make a button to reset password
    // make a button to go back to the home page

    return (
        <div>
            <div className="login-container">
                <div className="login-text">
                    <h1>Login</h1>
                    <p>Enter your email and password to login</p>
                </div>
                <div className="login-form">
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                        <button className="login-button">Login</button>
                        <button className="signup-button">Signup</button>
                        <button className="reset-button">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
