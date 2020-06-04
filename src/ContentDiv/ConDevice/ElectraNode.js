import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import './DeviceManagerNode.css'

export default class ElectraNode extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    nodeList = [
        {
            "id": 6,
            "type": "micro",
            "ip": "192.168.1.8",
            "port": 5000
        }, {
            "id": 1,
            "type": "micro",
            "ip": "192.168.1.6",
            "port": 5000
        }, {
            "id": 2,
            "type": "micro",
            "ip": "192.168.1.6",
            "port": 5000
        }, {
            "id": 3,
            "type": "nano",
            "ip": "192.168.1.7",
            "port": 5000
        }, {
            "id": 4,
            "type": "nano",
            "ip": "192.168.1.7",
            "port": 5000
        }, {
            "id": 5,
            "type": "micro",
            "ip": "192.168.1.8",
            "port": 5000
        }
    ];

    renderToModify(id) {
        console.log(id);
    }

    renderTableNode(nodeList) {
        const aa = nodeList.map((item, id) =>
            <tr key={id} onClick={() => {
                this.renderToModify(item.id)
            }}>
                <td style={{ width: "50px" }} className="row-gap">{item.id}</td>
                <td key={item.ip} className="flex4 row-gap">{item.ip}</td>
                <td className="flex2 row-gap">{item.port}</td>
            </tr>
        );

        return (aa);

        // return (
        //     { listItems }
        // );
    }

    renderTable() {
        return (
            <div id="tableId" className="responsive-node">
                <Table responsive >
                    <thead className="bgColor-lgreen">
                        <tr>
                            <th className="flex1 row-gap">Id</th>
                            <th className="flex4 row-gap">Network IP</th>
                            <th className="flex2 row-gap">Port</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableNode(this.nodeList)}
                    </tbody>
                </Table>
            </div>

        );
    }

    render() {
        return (
            <div>
                <div style={{ display: "flex" }} className="card-dm ">
                    <div className="flex1 gap-rx">
                        {this.renderTable()}
                    </div>

                    <div className="flex1 gap-lx bgColor-lgreen curve-margin">
                        <div style={{ paddingTop: "21px" }}>
                            <div className="nodeRow">
                                <div className="keyName keyName-dm">Project</div>
                                <input className="input-dm" value={this.props.project.name === "" || this.props.project.name === undefined ? "" : this.props.project.name} disabled ></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName keyName-dm">Node Type :</div>

                                <input className="input-dm"></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName keyName-dm">IP Address :</div>
                                <input className="input-dm"></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName keyName-dm">Port :</div>

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
        )
    }
}
