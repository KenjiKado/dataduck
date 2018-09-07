import React from "react";
import './ErrorTooltype.css';

const ErrorTooltype = ({error}) => {
    return (
        <div className="tooltype-error">
            <div className="tooltype-body">
                {error.message}
            </div>
            <div className="tooltype-arrow"></div>
        </div>
    )
};

export default  ErrorTooltype;