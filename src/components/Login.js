import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonGoBack from './ButtonGoBack';

function Login() {
    const navigate = useNavigate();


    return (
        <div>
            <ButtonGoBack />
            <div className="login-container">
                <div className="login-text">
                    <h1>Login</h1>
                    <p>Gebe deine Benutzerdaten ein</p>
                </div>
                <div className="login-form">
                    <form>
                        <label htmlFor="email">Benutzername</label>
                        <input type="email" id="email" name="email" placeholder="Dein Benutzername" />
                        <label htmlFor="password">Passwort</label>
                        <input type="password" id="password" name="password" placeholder="Dein Passwort" />
                        <button className="login-button">Login</button>
                        <button className="signup-button">Registrieren</button>
                        <button className="reset-button">Passwort zurücksetzen</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
