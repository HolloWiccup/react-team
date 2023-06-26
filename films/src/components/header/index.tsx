import React from 'react'
import './style.css'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-block">
                    <p className="header-logo">Home</p>
                    <button className="header-btn">Login</button>
                </div>
            </div>
        </header>
    )
}
