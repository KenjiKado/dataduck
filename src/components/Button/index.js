import React from "react";
import "./Button.css";

const Button = (props) => {
    return (
        <div className="btn-container">
            {(props.component === "button") ?
                <button name={props.name} type={props.type} className="btn" onClick={props.onClick}>{props.children}</button>
                : <a href={props.href} className="link-btn" onClick={props.onClick}>{props.children}</a> }
        </div>
    )
};

export default Button;