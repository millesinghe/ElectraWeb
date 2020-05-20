import React from 'react'
import NavHeader from './NavHeader/NavHeader'
import NavButton from './NavButton/NavButton'
import './NavDiv.css'

export default function NavDiv() {
    return (
        <div className="navBlur">
            <div>
                <NavHeader />
                <NavButton name = "Control Room"/>
                <NavButton name = "Device Manager"/>
                <NavButton name = "User Management"/>
            </div>

        </div>
    )
}