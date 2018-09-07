import React from "react";
import ErrorTooltype from"../ErrorTooltype";
import "./Field.css";

const Field = (props) => {
    return (
        <div className={(props.type !== "checkbox" && props.type !== "radio")? "input-row" : (props.type === "radio")? "radio-row" : "checkbox-row"}>
            {(props.errors)?
                <ErrorTooltype error={{message: props.errors}}/>
                :   ""}
            <input type={props.type} id={props.id} name={props.name}
                   placeholder={props.placeholder}
                   defaultValue={props.value}
                   required={props.required}
                   defaultChecked={props.checked}
                   className={(props.errors)? "error" :""} />
            {props.children}

        </div>
    )
};

export default Field;