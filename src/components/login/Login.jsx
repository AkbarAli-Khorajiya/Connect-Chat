import React from 'react'
import "./login.css"

const Login = () => {
    return (
        <div className='loginContainer'>
            <form className='myForm'>
                <h1>LogIn</h1>
                <div className="inp-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter email' />
                </div>
                <div className="inp-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter password' />
                </div>
                <p>Not an account? SignUp</p>
                <button>LogIn</button>
            </form>
        </div>
    )
}

export default Login