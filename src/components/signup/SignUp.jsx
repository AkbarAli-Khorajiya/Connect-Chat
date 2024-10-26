import React, { useState } from 'react'
import "./signup.css"

const SignUp = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    return (
        <div className='loginContainer'>
            <form className='myForm'>
                <h1>SignUp</h1>
                <div className="inp-image">
                    <img src={avatar.url || "./src/assets/images/profile.png"} alt="" />
                    <label htmlFor="file">Upload an image</label>
                    <input type="file" name="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                </div>
                <div className="inp-group">
                    <label htmlFor="userName">Username</label>
                    <input type="userName" name="userName" id="userName" placeholder='Enter username ' />
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
                    <label htmlFor="con-password">Confirm Password</label>
                    <input type="password" name="con-password" id="con-password" placeholder='Enter confirm password' />
                </div>
                <p>Have an account? LogIn</p>
                <button>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp