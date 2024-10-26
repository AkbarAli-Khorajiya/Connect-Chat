import React, { useEffect, useRef } from 'react'
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useState } from 'react'
import { toast } from 'react-toastify'
const Chat = () => {
    const [openEmoji, setOpenEmoji] = useState(false)
    const [text, setText] = useState("")

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji)
        setOpenEmoji(false)
    }

    const endRef = useRef(null)
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./src/assets/images/both.png" alt="" />
                    <div className="text">
                        <span>Jone Doe</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="icon">
                    <img src="./src/assets/images/call.png" alt="call" />
                    <img src="./src/assets/images/video.png" alt="video" />
                    <img src="./src/assets/images/info.png" alt="info" />
                </div>
            </div>

            <div className="center">
                <div className="message">
                    <img src="./src/assets/images/both.png" alt="" />
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing.. Ducimus, officiis! Lorem ipsum dolor sit amet.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing.. Ducimus, officiis! Lorem ipsum dolor sit amet.</p>
                        <img src="./src/assets/images/dashboard.png" alt="" />
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./src/assets/images/both.png" alt="" />
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing.. Ducimus, officiis! Lorem ipsum dolor sit amet.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing.. Ducimus, officiis! Lorem ipsum dolor sit amet.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./src/assets/images/both.png" alt="" />
                    <div className="text">
                        <img src="./src/assets/images/Screenshot 2024-09-24 171323.png" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing.. Ducimus, officiis! Lorem ipsum dolor sit amet.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="text">
                        <img src="./src/assets/images/pic.png" alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing.. Ducimus, officiis! Lorem ipsum dolor sit amet.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./src/assets/images/both.png" alt="" />
                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing.. Ducimus, officiis! Lorem ipsum dolor sit amet.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>

            <div className="bottom">
                <div className="icon">
                    <img src="./src/assets/images/camera.png" alt="cmr" />
                    <img src="./src/assets/images/img.png" alt="img" />
                    <img src="./src/assets/images/mic.png" alt="mic" />
                </div>
                <input
                    type="text"
                    placeholder='Text a message...'
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                <div className="emoji">
                    <img
                        src="./src/assets/images/smiley.png"
                        alt="emoji"
                        onClick={() => setOpenEmoji(!openEmoji)}
                    />
                    <div className="picker">
                        <EmojiPicker
                            open={openEmoji}
                            onEmojiClick={handleEmoji}
                        />
                    </div>
                </div>
                <button className='sendBtn' onClick={() => {
                    toast.warn("AkbarALi")
                }}>
                    <img src="./src/assets/images/send.png" alt="send" />
                </button>
            </div>
        </div>
    )
}

export default Chat