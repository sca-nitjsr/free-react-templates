import React from "react"
import './ThemeCard.css'

const ThemeCard = (props) => {

    return (
        <div className="card">
            <img src={props.address} alt="card" />
            <div className="onHoverImg">
                <h3>{props.name}</h3>
                <a target="_blank" rel="noreferrer" href="https://omega-mern-pro.onrender.com/" className="cardLink">Preview</a>
                <a target="_blank" rel="noreferrer" href="https://github.com/rishavnitjsr" className="cardLink">Source Code</a>
            </div>
        </div>
    )
};

export default ThemeCard;