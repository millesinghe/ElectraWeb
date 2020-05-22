import React, { useState } from 'react'
import "./NavButton.css"
import { FaUserCog } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { GiControlTower } from "react-icons/gi";

export default function NavButton(props) {

    let renderIcon;

    if (props.name === "Control Room") {
        renderIcon = <div id="btnIcon"><GiControlTower size='2rem' /></div>
    } else if (props.name === "Device Manager") {
        renderIcon = <div id="btnIcon"><GiElectric size='2rem' /></div>
    } else if (props.name === "User Management") {
        renderIcon = <div id="btnIcon"><FaUserCog size='2rem' /></div>
    }


    const [varContent, setVarContent] = useState("Control Room");

    const renderContentView = () => {
        setVarContent(props.name);
        console.log(props + "- Clicked on " + varContent);
    };

    return (
        <>
            <div id="navBtn" onClick={renderContentView} >
                <div style={{ margin: "10px" }}></div>
                {renderIcon}
                <li id="btnText"><p id="btnName">{props.name}</p></li>
            </div>

        </>
    )
}
