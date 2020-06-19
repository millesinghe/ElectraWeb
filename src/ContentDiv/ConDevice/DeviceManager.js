import React from 'react'
import Accodian from './../../UtilComponent/Accodian/Accodian'


import { useSelector } from 'react-redux';

import './DeviceManager.css'

export default function DeviceManager() {

    const electraProject = useSelector(state => state.project);

    return (
        <div>

            <Accodian project={electraProject} title="Electra Nodes" content="ElectraNode" />
            <Accodian project={electraProject} title="Electra Device" content="ElectraDevice" />
        </div>
    )
}
