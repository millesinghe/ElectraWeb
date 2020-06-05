import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { ElectraModelDevice } from "./../../Model/ElectraModelDevice"

import './DeviceManagerNode.css'

export default class ElectraDevice extends Component {

    state = {
        projectDevicesList: [],

        isSelectedDevices: "",
        selectedDevice: {}

    }

    constructor() {
        super();
        this.loadProjectDevices();
    }


    componentDidUpdate(prevProps, prevState) {
        let varProject = this.props === undefined ? "" : this.props.project;

        let tempNodeList = (!(varProject.nodesList === "" || varProject.nodesList === undefined)) && (prevProps.project !== this.props.project) ?
            varProject.nodesList : "";

        let deviceList = []
        if (tempNodeList.length > 0) {
            let tempDevices = tempNodeList.map(scNode => {
                scNode.deviceList.map(dev => { dev.connectedNode = scNode.id; deviceList.push(dev)});
            })
           this.setState({ projectDevicesList: deviceList });

        }
        
    }

    loadProjectDevices() {

        let deviceList = this.state.projectDevicesList;

        // let device1 = new ElectraModelDevice(1, "MilindaSwitch", "MilindaRoom", "Bulb", "0", "MilindaHouse", "1", "3");
        // let device2 = new ElectraModelDevice(2, "MilindaFan", "MilindaRoom", "Fan", "0", "MilindaHouse", "1", "3");
        // let device3 = new ElectraModelDevice(3, "LivingAC", "LivingRoom", "Air Conditioner", "0", "MilindaHouse", "2", "3");
        // let device4 = new ElectraModelDevice(4, "LivingLight", "LivingRoom", "Bulb", "0", "MilindaHouse", "2", "3");

        // nodeList.push(device1);
        // nodeList.push(device3);
        // nodeList.push(device2);
        // nodeList.push(device4);


        this.setState({
            projectDevicesList: deviceList
        })
    }


    renderToModify(id) {

        this.state.projectDevicesList.forEach(scanDevice => {
            if (scanDevice.id === id) {
                this.setState({
                    selectedDevice: scanDevice,
                    isSelectedDevices: id
                })
                return;
            }
        })

    }


    renderTableNode(deviceList) {

        const aa = deviceList.map((item, id) =>
            <tr key={id} className={`tr-dm ${this.state.isSelectedDevices === item.id ? "selected-dm-node" : ""}`} onClick={() => {
                this.renderToModify(item.id)
            }}>
                <td key={item.id} style={{ width: "50px" }} className="row-gap">{item.id}</td>
                <td className="flex4 row-gap">{item.name}</td>
                <td className="flex2 row-gap">{item.type}</td>
                <td className="flex2 row-gap">{item.connectedNode}</td>
            </tr>
        );

        return (aa);
    }

    renderTable() {
        return (
            <div id="tableId" className="responsive-device">
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
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "name")} value={this.state.selectedDevice.name === "" || this.state.selectedDevice.name === undefined ? "" : this.state.selectedDevice.name}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Device Group/Location</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "location")} value={this.state.selectedDevice.groupName === "" || this.state.selectedDevice.groupName === undefined ? "" : this.state.selectedDevice.groupName}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Device Category</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "type")} value={this.state.selectedDevice.type === "" || this.state.selectedDevice.type === undefined ? "" : this.state.selectedDevice.type}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Default Value</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "def_value")} value={this.state.selectedDevice.defaultValue === "" || this.state.selectedDevice.defaultValue === undefined ? "" : this.state.selectedDevice.defaultValue}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Connected Node</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "connectedNode")} value={this.state.selectedDevice.connectedNode === "" || this.state.selectedDevice.connectedNode === undefined ? "" : this.state.selectedDevice.connectedNode}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Device Connector Slot</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "slot")} value={this.state.selectedDevice.connectorSlot === "" || this.state.selectedDevice.connectorSlot === undefined ? "" : this.state.selectedDevice.connectorSlot}></input>
            </div>
            <div className="nodeRow" style={{ padding: "7px 15px" }}>
                <button className="btn-dm button-card">Add</button>
                <div className="marginGap"></div>
                <button className="btn-dm button-card">Save</button>
                <button className="btn-dm button-card">Cancel</button>
            </div>
        </div>);
    }

    OnChangeListnerText(attrib, event) {
        event.persist();

        if (attrib === 'name') {
            this.setState(prevState => ({ selectedDevice: { ...prevState.selectedDevice, name: event.target.value } }));
        } else if (attrib === 'location') {
            this.setState(prevState => ({ selectedDevice: { ...prevState.selectedDevice, groupName: event.target.value } }));
        } else if (attrib === 'type') {
            this.setState(prevState => ({ selectedDevice: { ...prevState.selectedDevice, type: event.target.value } }));
        } else if (attrib === 'def_value') {
            this.setState(prevState => ({ selectedDevice: { ...prevState.selectedDevice, defaultValue: event.target.value } }));
        } else if (attrib === 'connectedNode') {
            this.setState(prevState => ({ selectedDevice: { ...prevState.selectedDevice, connectedNode: event.target.value } }));
        } else if (attrib === 'slot') {
            this.setState(prevState => ({ selectedDevice: { ...prevState.selectedDevice, connectorSlot: event.target.value } }));
        }

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
