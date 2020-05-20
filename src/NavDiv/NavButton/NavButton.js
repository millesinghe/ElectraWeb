import React from 'react'
import "./NavButton.css"
import { FaUserCog } from "react-icons/fa";

export default function NavButton() {


    return (
        <>
            <div id="navBtn">
                <div id = "centerIcon"><FaUserCog color="white" size='2rem' /></div>
                <div><p>User Management</p></div>
            </div>

        </>
    )
}
