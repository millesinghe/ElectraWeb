import React from 'react'
import NavHeader from './NavHeader/NavHeader'
import NavButton from './NavButton/NavButton'
import './NavDiv.css'

export default function NavDiv() {
    return (
        <div className="navBlur">
            <div>
                <NavHeader />
                <NavButton />
            </div>

        </div>
    )
}