import React from 'react'
import "./userInfo.css"
import useUserStore from '../../../lib/userStore'

const UserInfo = () => {
    const { currentUser } = useUserStore()

    return (
        <div className='userInfo'>
            <div className="user">
                <img src={currentUser.avatar || "./src/assets/images/profile.png"} alt="user-image" />
                <h2>{currentUser.name}</h2>
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