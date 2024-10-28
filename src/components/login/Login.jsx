import React, { useState } from 'react'
import "./login.css"
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../lib/firebaseConfig'
import Loader from '../loader/Loader'

const Login = ({ setFormAction }) => {
    const [loader, setLoader] = useState(false)

    const validation = (email, password) => {
        if (email.length == 0) {
            return "Email can not be empty"
        }
        if (password.length < 1) {
            return "Password can not be empty"
        }
        return 1
    }

    const handleLoginForm = async (e) => {
        e.preventDefault()

        setLoader(true)

        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData)
        const validate = validation(email, password)
        if (validate == 1) {
            try {
                await signInWithEmailAndPassword(auth, email, password)

                if (toast.success("Loged In successfully")) {
                    setLoader(false)
                }
            }
            catch (error) {
                setLoader(false)
                let errorMsg = error.message.split("(")[0].split(":")[1]
                toast.error("Invalid Credential")
            }
        } else {
            toast.error(validate)
            setLoader(false)

        }
    }

    return (
        <div className='loginContainer'>
            {
                loader ? (<Loader />) :
                    (
                        <form className='myForm' onSubmit={handleLoginForm}>
                            <h1>LogIn</h1>
                            <div className="inp-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder='Enter email' />
                            </div>
                            <div className="inp-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder='Enter password' />
                            </div>
                            <p onClick={() => { setFormAction(false) }}>Not have an account? SignUp</p>
                            <button type="submit">LogIn</button>
                        </form>
                    )
            }
        </div>
    )
}

export default Login