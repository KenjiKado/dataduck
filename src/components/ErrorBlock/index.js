import React from "react";
import "./ErrorBlock.css";

const ErrorBlock = (props) => {
    return (
        <div className="error-block">
            {props.children}
        </div>
    )
};
export default ErrorBlock;