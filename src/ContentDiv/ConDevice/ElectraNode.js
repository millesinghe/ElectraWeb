import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import './DeviceManagerNode.css'


export default class ElectraNode extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    renderTable() {
        return (
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
                        <td className="row-gap">Table cell</td>
                        <td className="row-gap">Table cell</td>
                        <td className="row-gap">Table cell</td>
                    </tr>
                    <tr>
                        <td className="row-gap">Table cell</td>
                        <td className="row-gap">Table cell</td>
                        <td className="row-gap">Table cell</td>
                    </tr>
                    <tr>
                        <td className="row-gap">Table cell</td>
                        <td className="row-gap">Table cell</td>
                        <td className="row-gap">Table cell</td>
                    </tr>
                </tbody>
            </Table>
        );
    }

    render() {
        return (
            <div>
                <div style={{display: "flex" }} className="card-dm ">
                    <div className="flex1 gap-rx">
                        {this.renderTable()}
                    </div>
                    <div className="flex1 gap-lx bgColor-lgreen curve-margin">
                        <div className="nodeRow">
                            <div className="keyName keyName-dm">Project</div>
                            <div className="midbar" />
                            <input className="input-dm" value={this.props.project.name === "" || this.props.project.name === undefined ? "" : this.props.project.name} disabled ></input>
                        </div>
                        <div className="nodeRow">
                            <div className="keyName keyName-dm">Node Type :</div>
                            <div className="midbar" />
                            <input className="input-dm"></input>
                        </div>
                        <div className="nodeRow">
                            <div className="keyName keyName-dm">IP Address :</div>
                            <div className="midbar" />
                            <input className="input-dm"></input>
                        </div>
                        <div className="nodeRow">
                            <div className="keyName keyName-dm">Port :</div>
                            <div className="midbar" />
                            <input className="input-dm"></input>
                        </div>
                        <div className="nodeRow" style={{ padding: '0px 50px 0 50px', margin: '15px' }}>

                            <button className="btn-dm">Add New</button>
                            <button className="btn-dm">Save</button>
                            <button className="btn-dm">Cancel</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
