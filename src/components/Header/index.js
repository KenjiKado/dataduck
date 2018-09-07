import React from "react";
import Button from "../Button";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="line-block">
                    <div className="line"><span></span></div>
                </div>
                <div className="login-block">
                    <Button href="#login">Войти</Button>
                </div>
            </div>
        </header>
    )
}
export default Header;