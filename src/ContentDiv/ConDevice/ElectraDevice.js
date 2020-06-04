import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { ElectraModelDevice } from "./../../Model/ElectraModelDevice"

import './DeviceManagerNode.css'

export default class ElectraDevice extends Component {

    constructor() {
        super();
        this.loadProjectDevices();
    }

    state = {
        selectedNode: [],
        projectDevicesList: [],

        isSelectedDevices: ""

    }

    loadProjectDevices() {

        let device1 = new ElectraModelDevice(1, "MilindaSwitch", "MilindaRoom", "Bulb", "0", "MilindaHouse", "1", "3");
        let device2 = new ElectraModelDevice(2, "MilindaFan", "MilindaRoom", "Fan", "0", "MilindaHouse", "1", "3");
        let device3 = new ElectraModelDevice(3, "LivingAC", "LivingRoom", "Air Conditioner", "0", "MilindaHouse", "2", "3");
        let device4 = new ElectraModelDevice(4, "LivingLight", "LivingRoom", "Bulb", "0", "MilindaHouse", "2", "3");

        let nodeList = this.state.projectDevicesList;
        nodeList.push(device1);
        nodeList.push(device3);
        nodeList.push(device2);
        nodeList.push(device4);


        this.setState({
            projectDevicesList: nodeList
        })
    }


    renderToModify(id) {

        this.setState({
            isSelectedDevices: id
        })
        console.log(id + " - " + this.state.isSelectedDevices);

    }


    renderTableNode(deviceList) {

        const aa = deviceList.map((item, id) =>
            <tr key={id} className={`tr-dm ${this.state.isSelectedDevices === item.id ? "selected-dm-node" : ""}`} onClick={() => {
                this.renderToModify(item.id)
            }}>
                <td style={{ width: "50px" }} className="row-gap">{item.id}</td>
                <td key={item.ip} className="flex4 row-gap">{item.name}</td>
                <td className="flex2 row-gap">{item.type}</td>
                <td className="flex2 row-gap">{item.connectedNode}</td>
            </tr>
        );

        return (aa);
    }

    renderTable() {
        return (
            <div id="tableId" className="responsive-node">
                <Table responsive >
                    <thead className="table-header">
                        <tr>
                            <th className="flex1 row-gap">Id</th>
                            <th className="flex4 row-gap">Name</th>
                            <th className="flex2 row-gap">Type</th>
                            <th className="flex2 row-gap">Node</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableNode(this.state.projectDevicesList)}
                    </tbody>
                </Table>
            </div>

        );
    }

    renderDetailTab() {
        return (<div style={{ paddingTop: "21px" }}>
            <div className="nodeRow">
                <div className="keyName keyName-dm">Project</div>
                <input className="input-dm" value={this.props.project.name === "" || this.props.project.name === undefined ? "" : this.props.project.name} disabled ></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Device Name*</div>
                <input className="input-dm"></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Device Group/Location</div>
                <input className="input-dm"></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Device Category</div>
                <input className="input-dm"></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Default Value</div>
                <input className="input-dm"></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Connected Node</div>
                <input className="input-dm"></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Device Connector Slot</div>
                <input className="input-dm"></input>
            </div>
            <div className="nodeRow" style={{ padding: "7px 15px" }}>
                <button className="btn-dm button-card">Add</button>
                <div className="marginGap"></div>
                <button className="btn-dm button-card">Save</button>
                <button className="btn-dm button-card">Cancel</button>
            </div>
        </div>);
    }

    render() {
        return (

            <div>
                <div>
                    <div style={{ padding: "22px", display: "flex" }}>
                        <div className="flex1 gap-rx">
                            {this.renderTable()}
                        </div>
                        <div className="flex1 gap-lx bgColor-lgreen curve-margin">
                            {this.renderDetailTab()}
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
