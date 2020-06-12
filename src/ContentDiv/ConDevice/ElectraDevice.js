import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios';

import './DeviceManagerNode.css'

export default class ElectraDevice extends Component {

    state = {
        projectDevicesList: [],

        isSelectedDevices: "",
        selectedDevice: {},

        isDelete: false,
        isNew: false,
        beforeDevice: {},

        isModified: false,

        errorMsg: ""

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
            // eslint-disable-next-line
            let tempDevices = tempNodeList.map(scNode => {
                // eslint-disable-next-line
                scNode.deviceList.map(dev => { dev.connectedNode = scNode.id; deviceList.push(dev) });
            })
            console.debug(tempDevices);
            this.setState({ projectDevicesList: deviceList });

        }

    }

    loadProjectDevices() {

        let deviceList = this.state.projectDevicesList;

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


    renderTableDevice(deviceList) {

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

    reRenderTable(data, nodeId) {
        let modifiedDeviceList = [];
        this.state.projectDevicesList.forEach(node => {
            if (node.id === data.id) {
                if (!this.state.isDelete) {
                    data.connectedNode = nodeId;
                    modifiedDeviceList.push(data)
                }
            } else {
                modifiedDeviceList.push(node);
            }
        });
        if (this.state.isNew) {
            data["connectedNode"] = nodeId;
            modifiedDeviceList.push(data);
        }
        this.setState({ isNew: false, isDelete: false, isModified: false, "projectDevicesList": modifiedDeviceList })
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
                        {this.renderTableDevice(this.state.projectDevicesList)}
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
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "connectedNode")} value={this.state.selectedDevice.connectedNode === "" || this.state.selectedDevice.connectedNode === undefined ? "" : this.state.selectedDevice.connectedNode.id === undefined ? this.state.selectedDevice.connectedNode : this.state.selectedDevice.connectedNode.id}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName">Device Connector Slot</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "slot")} value={this.state.selectedDevice.connectorSlot === "" || this.state.selectedDevice.connectorSlot === undefined ? "" : this.state.selectedDevice.connectorSlot}></input>
            </div>
            <div className="nodeRow" style={{ padding: "7px 15px" }}>
                <button disabled={this.state.isModified} className="btn-dm button-card" onClick={this.actionAdd.bind(this)}>Add</button>
                <button disabled={this.state.isModified} className="btn-dm button-card" onClick={this.actionRemove.bind(this)}>Remove</button>
                <div className="marginGap"></div>
                <button disabled={!this.state.isModified} className="btn-dm button-card" onClick={this.actionOk.bind(this)}>Save</button>
                <button disabled={!this.state.isModified} className="btn-dm button-card" onClick={this.actionCancel.bind(this)}>Cancel</button>
            </div>
        </div>);
    }

    OnChangeListnerText(attrib, event) {
        event.persist();

        if (!this.state.isModified) {
            this.setState({
                isModified: true,
                beforeDevice: this.state.selectedDevice,
            });
        }

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

    actionAdd() {
        this.setState({
            isModified: true,
            isNew: true,
            beforeDevice: this.state.selectedDevice,
            selectedDevice: {}

        });

        console.log("Clicked Add New")
    }

    actionRemove() {
        this.setState({
            isModified: false,
            isNew: false,
            isDelete: true,
            beforeNode: {},
            selectedNode: {}

        });

        axios.delete("http://localhost:5000/meta/device/" + this.state.selectedDevice.id)
            .then(res => res.data)
            .then((data) => {
                this.reRenderTable(data);
            }).catch(error => {

            })
            .catch((error) => {
                // Error
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    //console.log(error.response.headers);
                    // } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the 
                    // browser and an instance of
                    // http.ClientRequest in node.js
                    //     console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });

    }

    buildURLMap(node, device) {
        let urls = {};
        urls["Switch-On"] = "http://" + node.ip + ":" + node.port + "/" + device.connectorSlot + "/on";
        urls["Switch-Off"] = "http://" + node.ip + ":" + node.port + "/" + device.connectorSlot + "/off";
        return urls;
    }

    actionOk() {

        let projectObj = JSON.parse(JSON.stringify(this.props.project));
        let tempDevice = this.state.selectedDevice;
        let nodeObj = {};

        projectObj.nodesList.forEach(nodeElement => {
            if (nodeElement.id == tempDevice.connectedNode) {
                nodeObj = nodeElement;
                delete nodeObj.deviceList;
                delete projectObj.nodesList;
                nodeObj["project"] = projectObj;
            }
        });

        tempDevice["urlMap"] = this.buildURLMap(nodeObj, tempDevice);

        tempDevice["connectedNode"] = nodeObj;

        console.log("end0" + tempDevice);
        if (this.state.isNew) {
            // Add New Node
            tempDevice["project"] = this.props.project.name;
            axios.post("http://localhost:5000/meta/device", this.state.selectedDevice)
                .then(res => res.data)
                .then((data) => {
                    this.reRenderTable(data, this.state.selectedDevice.connectedNode.id);
                    console.log(data);
                }).catch((error) => {
                    // Error
                    if (error.response) {
                        let errorMessage = "";
                        if (error.response.data.message.includes("TransientPropertyValueException")) {
                            errorMessage = "Invalid Node for configuration"
                        }
                        this.setState({
                            errorMsg: errorMessage
                        });
                        console.log(error.response.status + " - " + error.response.data);
                    }
                });
        } else {
            // Update Node
            axios.put("http://localhost:5000/meta/device/" + this.state.selectedDevice.id, this.state.selectedDevice)
                .then(res => res.data)
                .then((data) => {
                    this.reRenderTable(data, this.state.selectedDevice.connectedNode.id);
                    console.log(data);
                }).catch((error) => {
                    // Error
                    if (error.response) {
                        let errorMessage = "";
                        if (error.response.data.message.includes("TransientPropertyValueException")) {
                            errorMessage = "Invalid Node for configuration"
                        }
                        this.setState({
                            errorMsg: errorMessage
                        });
                        console.log(error.response.status + " - " + error.response.data);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }
    }

    actionCancel() {
        this.setState({
            isModified: false,
            isNew: false,
            selectedDevice: this.state.beforeDevice,
            beforeDevice: {}

        });
        console.log("Clicked Cancel")
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
