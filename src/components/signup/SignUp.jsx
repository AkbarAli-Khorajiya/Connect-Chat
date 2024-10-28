import React, { useState } from 'react'
import "./signup.css"
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from '../../lib/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import upload from '../../lib/upload'
import Loader from '../loader/Loader'
// import { doc, setDocs } from 'firebase/firestore'

const SignUp = ({ setFormAction }) => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })
    const [loader, setLoader] = useState(false)

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const validation = (username, email, password, conPassword) => {
        if (username.length == 0) {
            return "Name can not be empty"
        }
        if (email.length == 0) {
            return "Email can not be empty"
        }
        if (password.length < 6) {
            return "Password must be 6 characters long"
        }
        if (conPassword.length == 0) {
            return "Confirm password can not be empty"
        }
        if (password != conPassword) {
            return "Password must be same"
        }
        return 1
    }

    const handleForm = async (e) => {
        e.preventDefault()

        setLoader(true)

        const formData = new FormData(e.target)
        const { username, email, password, conPassword } = Object.fromEntries(formData)
        const validate = validation(username, email, password, conPassword)
        if (validate == 1) {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password)

                const imgUrl = await upload(avatar.file || "./src/assets/images/profile.png")

                await setDoc(doc(db, "users", res.user.uid), {
                    name: username,
                    email: email,
                    avatar: imgUrl,
                    password: password,
                    id: res.user.uid,
                    blocked: []
                })
                await setDoc(doc(db, "userChats", res.user.uid), {
                    chats: []
                })

                if (toast.success("Account Created! Now you can logIn")) {
                    setLoader(false)
                }


            } catch (error) {
                setLoader(false)
                let errorMsg = error.message.split("(")[0].split(":")[1]
                toast.error(errorMsg)
            }
        }
        else {
            toast.error(validate)
            setLoader(false)
        }


    }

    return (
        <div className='loginContainer'>
            {
                loader ? (<Loader />) : (
                    <form className='myForm' onSubmit={handleForm}>
                        <h1>SignUp</h1>
                        <div className="inp-image">
                            <img src={avatar.url || "./src/assets/images/profile.png"} alt="" />
                            <label htmlFor="file">Upload an image</label>
                            <input type="file" name="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                        </div>
                        <div className="inp-group">
                            <label htmlFor="username">Name</label>
                            <input type="username" name="username" id="username" placeholder='Enter username ' />
                        </div>
                        <div className="inp-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Enter email' />
                        </div>
                        <div className="inp-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Enter password' />
                        </div>
                        <div className="inp-group">
                            <label htmlFor="conPassword">Confirm Password</label>
                            <input type="password" name="conPassword" id="conPassword" placeholder='Enter confirm password' />
                        </div>
                        <p onClick={() => { setFormAction(true) }}>Have an account? LogIn</p>
                        <button type="submit">SignUp</button>
                    </form> 
                )
            }
        </div>
    )
}

export default SignUp