import React from 'react'
import "./NavButton.css"
import { FaUserCog } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { GiControlTower } from "react-icons/gi";

export default class NavButton extends React.Component {


    iconRender(name) {

        let renderIcon;

        if (name === "Control Room") {
            renderIcon = <div id="btnIcon"><GiControlTower size='2rem' /></div>
        } else if (name === "Device Manager") {
            renderIcon = <div id="btnIcon"><GiElectric size='2rem' /></div>
        } else if (name === "User Management") {
            renderIcon = <div id="btnIcon"><FaUserCog size='2rem' /></div>
        }
        return renderIcon;
    }

    btnClickRef(val) {
        this.props.updateNavState(val);
    }

    render() {
        return (
            <>
                <div className="navBtn" id={this.props.name} onClick ={() => this.btnClickRef(this.props.name)}>
                    <div style={{ margin: "10px" }}></div>
                    {this.iconRender(this.props.name)}
                    <li id="btnText"><p id="btnName">{this.props.name}</p></li>
                </div>

            </>
        )
    }
}

export function RenderIcon(props) {

    let renderIcon;

    if (props.name === "Control Room") {
        renderIcon = <div id="btnIcon"><GiControlTower size='2rem' /></div>
    } else if (props.name === "Device Manager") {
        renderIcon = <div id="btnIcon"><GiElectric size='2rem' /></div>
    } else if (props.name === "User Management") {
        renderIcon = <div id="btnIcon"><FaUserCog size='2rem' /></div>
    }

    return (
        <div>
            {renderIcon}
        </div>
    )
}

