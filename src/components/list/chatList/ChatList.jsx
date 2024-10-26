import React from 'react'
import "./chatList.css"
import { useState } from 'react'
import AddUser from '../chatList/addUser/AddUser'

const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./src/assets/images/search.png" alt="" />
                    <input type="text" placeholder='search here..' />
                </div>
                <img
                    src={addMode ? "./src/assets/images/minus.png" : "./src/assets/images/plus.png"}
                    alt="addIcon"
                    className='add'
                    onClick={() => setAddMode(!addMode)}
                />
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            <div className="item">
                <img src="./src/assets/images/both.png" alt="" />
                <div className="text">
                    <span>Jone Doe</span>
                    <p>Hello, Good morning</p>
                </div>
            </div>
            {
                addMode && <AddUser />
            }
        </div>
    )
}

export default ChatList