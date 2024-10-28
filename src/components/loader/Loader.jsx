import React from 'react'
import { Rings } from 'react-loader-spinner'
import "./loader.css"

const Loader = () => {
    return (
        <div className="loderContainer">
            <Rings
                visible={true}
                height="60"
                width="60"
                color="#a5a5a5"
                ariaLabel="rings-loading"
            />
            <p>Loading...</p>
        </div>
    )
}

export default Loader