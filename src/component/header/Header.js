import React from 'react'
import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
              < a href="/" >  TSF</a>
            </div>
            <div className="header__right">
            < a href="/" >  Home</a>
            </div>
        </div>
    )
}

export default Header
