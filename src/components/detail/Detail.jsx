import React from 'react'
import "./detail.css"

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./src/assets/images/pic.png" alt="" />
                <h2>Jone Doe</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./src/assets/images/upArrow.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./src/assets/images/upArrow.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./src/assets/images/downArrow.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./src/assets/images/pic.png" alt="" />
                                <span>img_2024_2.png</span>
                            </div>
                            <img src="./src/assets/images/download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./src/assets/images/pic.png" alt="" />
                                <span>img_2024_2.png</span>
                            </div>
                            <img src="./src/assets/images/download.png" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./src/assets/images/pic.png" alt="" />
                                <span>img_2024_2.png</span>
                            </div>
                            <img src="./src/assets/images/download.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./src/assets/images/upArrow.png" alt="" />
                    </div>
                </div>
            </div>
            <button>Block User</button>
        </div>
    )
}

export default Detail