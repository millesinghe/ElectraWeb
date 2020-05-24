import React, { useState, useRef } from 'react'
import Chevron from './Chevron'

import './Accodian.css'

export default function Accodian(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null)

    function toggleAccordian() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        console.log("scrollHeight - " + content.current.scrollHeight);
    }

    return (
        <div className="accordion__section">
            <button className={`accordion_btn ${setActive}`} onClick={toggleAccordian}>
                <div id="tagTitle"><p className="accordion__title">{props.title}</p></div>
                <div id="tagIcon"><Chevron width={10} fill={"#05b193f2"} /></div>
            </button>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>
        </div>
    )
}
