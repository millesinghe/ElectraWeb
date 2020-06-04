import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import './DeviceManagerNode.css'

export default class ElectraDevice extends Component {
   
    renderTable() {
        return (
            <div id="tableId" className="responsive-device">
                <Table responsive>
                    <thead className="bgColor-lgreen">
                        <tr>
                            <th className="row-gap">Node Id</th>
                            <th className="row-gap">Network IP</th>
                            <th className="row-gap">Port</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="row-gap">1</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                        <tr>
                            <td className="row-gap">2</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                        <tr>
                            <td className="row-gap">3</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                        <tr>
                            <td className="row-gap">T4</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                        <tr>
                            <td className="row-gap">5l</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                        <tr>
                            <td className="row-gap">6</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                        <tr>
                            <td className="row-gap">7</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                        <tr>
                            <td className="row-gap">8</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                        <tr>
                            <td className="row-gap">9</td>
                            <td className="row-gap">Table cell</td>
                            <td className="row-gap">Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        );
    }
    
    render() {
        return (

            <div>
                <div>
                    <div style={{ padding: "22px", display: "flex"}}>
                        <div className="flex1 gap-rx">
                        {   this.renderTable()}
                        </div>
                        <div className="flex1 gap-lx bgColor-lgreen curve-margin">
                            <div style={{ paddingTop: "21px" }}>
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
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
