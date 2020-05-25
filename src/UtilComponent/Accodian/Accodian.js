import React, { useState, useRef } from 'react'
import Chevron from './Chevron'
import * as DeviceViews from "./../../ContentDiv/ConDevice/ViewRender"

import './Accodian.css'

export default function Accodian(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null)

    function toggleAccordian() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    }

    return (
        <div className="accordion__section">
            <button className={`accordion_btn ${setActive}`} onClick={toggleAccordian}>
                <div className="flex1"></div>
                <div id="tagTitle"><p className="accordion__title">{props.title}</p></div>
                <div id="tagIcon"><Chevron width={10} fill={"#05b193f2"} /></div>
            </button>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
                {renderContentView(props.content)}
                {/* <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} /> */}
            </div>
        </div>
    )

    function renderContentView(ViewName) {
        if (!ViewName)
            return "";
        const View = DeviceViews[ViewName];
        return <View />;
    }

}

