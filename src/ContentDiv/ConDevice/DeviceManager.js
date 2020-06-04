import React, { useState } from 'react'
import Accodian from './../../UtilComponent/Accodian/Accodian'

import axios from 'axios';

import './DeviceManager.css'

export default function DeviceManager() {

    const [projectName, setProjectName] = useState("");
    const [btnImportPressed, setBtnImportPressed] = useState(false);
    const [project, setProject] = useState(
        {
            connection_Password: "",
            connection_SSID: "",
            id: 0,
            name: ""
        }
    );

    function importProject() {
        setBtnImportPressed(true);
        axios.get("http://localhost:5000/meta/project/byName/" + projectName)
            .then(res => res.data)
            .then((data) => {
                setProject(data);
            });
    }

    function handleChange(e) {
        setProjectName(e.target.value);
    }

    function filterMessage() {
        return !btnImportPressed ? "" : project.name === undefined || project.name === "" ? <div className="failed">Invalid</div> : <div className="success">Success</div>
    }

    return (
        <div>

            <div className="row" style={{ padding: '26px' }}>
                <h5> Project : </h5>
                <input onChange={handleChange} className="flex2 project-input"></input>
                <button className="flex1 button-import" onClick={() => { importProject() }}>Import</button>
                <div className="flex1 project-status">{filterMessage()}</div>
                <div className="flex4"></div>
            </div>
            <Accodian project={project} title="Electra Nodes" content="ElectraNode" />
            <Accodian project={project} title="Electra Device" content="ElectraDevice" />
        </div>
    )
}
