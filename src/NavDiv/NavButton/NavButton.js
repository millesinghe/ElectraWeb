import React from 'react'
import "./NavButton.css"
import { FaUserCog } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { GiControlTower } from "react-icons/gi";

export default function NavButton(props) {

    let renderIcon;

    if (props.name === "Control Room") {
        renderIcon = <div id="btnIcon"><GiControlTower color="white" size='2rem' /></div>
    } else if (props.name === "Device Manager") {
        renderIcon = <div id="btnIcon"><GiElectric color="white" size='2rem' /></div>
    } else if (props.name === "User Management") {
        renderIcon = <div id="btnIcon"><FaUserCog color="white" size='2rem' /></div>
    }

    return (
        <>
            <div id="navBtn">
                {renderIcon}
                <li id="btnText"><p>{props.name}</p></li>
            </div>

        </>
    )
}
