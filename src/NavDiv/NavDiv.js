import React from 'react'
import NavButton from './NavButton/NavButton'
import './NavDiv.css'

export default class NavDiv extends React.Component {


    updateParentAppState(val) {
        this.props.updateAppState(val);
    }

    render() {
        return (
            <div className="navBlur">
                <ul>
                    <NavButton name="Control Room" updateNavState={this.updateParentAppState.bind(this)} />
                    <NavButton name="Device Manager" updateNavState={this.updateParentAppState.bind(this)} />
                    <NavButton name="User Management" updateNavState={this.updateParentAppState.bind(this)} />
                </ul>

            </div>
        )
    }
}