import React from 'react'
import "./userInfo.css"

const UserInfo = () => {
    return (
        <div className='userInfo'>
            <div className="user">
                <img src="./src/assets/images/both.png" alt="user-image" />
                <h2>AkbarAli</h2>
            </div>
            <div className="icons">
                <img src="./src/assets/images/three-dots.png" alt="" />
                <img src="./src/assets/images/video.png" alt="" />
                <img src="./src/assets/images/edit.png" alt="" />
            </div>
        </div>
    )
}

export default UserInfo