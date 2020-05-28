import React from 'react';
import './ToggleBtn.css';

export default function ToggleBtn(props) {
    return (
        <>

            <input className="react-switch-checkbox" checked={props.isOn} onChange={props.handleToggle} id={`react-switch-new`} type="checkbox" />
            <label style={{ background: props.isOn && '#06D6A0' }} className="react-switch-label" htmlFor={`react-switch-new`}>
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};