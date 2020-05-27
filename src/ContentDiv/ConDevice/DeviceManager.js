import React from 'react'
import Accodian from './../../UtilComponent/Accodian/Accodian'
import './DeviceManager.css'

export default function DeviceManager() {


    return (
        <div>
            <div id="header"><h1>Device Manager</h1></div>
            

            <Accodian title="Electra Nodes" content="ElectraNode" />
            <Accodian title="Electra Device" content="ElectraDevice" />
        </div>
    )
}
