import React from 'react'
import "./addUser.css"
const AddUser = () => {
    return (
        <div className="addUser">
            <form>
                <input type="text" placeholder='Search user' name='username' />
                <button>Search</button>
            </form>
            <div className="allUsers">
                <div className="user">
                    <div className="detail">
                        <img src="./src/assets/images/both.png" alt="" />
                        <span>Jone Doe</span>
                    </div>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddUser