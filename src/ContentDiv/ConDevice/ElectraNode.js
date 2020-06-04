import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { ElectraModelNode } from './../../Model/ElectraModelNode'
import './DeviceManagerNode.css'

export default class ElectraNode extends Component {

    constructor() {
        super();
        this.loadProjectNodes();
    }

    state = {
        selectedNode: [],
        projectNodesList: [],

        isSelectedNode: ""

    }

    loadProjectNodes() {

        let node1 = new ElectraModelNode(1, "192.168.1.7", "5000", "micro");
        let node2 = new ElectraModelNode(3, "192.168.1.4", "5000", "nano");
        let node3 = new ElectraModelNode(2, "192.168.1.100", "5000", "micro");

        let nodeList = this.state.projectNodesList;
        nodeList.push(node1);
        nodeList.push(node2);
        nodeList.push(node3);


        this.setState({
            projectNodesList: nodeList
        })
    }


    renderToModify(id) {

        this.setState({
            isSelectedNode: id
        })
        console.log(id + " - " + this.state.isSelectedNode);

    }

    renderTableNode(nodeList) {

        const aa = nodeList.map((item, id) =>
            <tr key={id} className={`tr-dm ${this.state.isSelectedNode === item.id ? "selected-dm-node" : ""}`} onClick={() => {
                this.renderToModify(item.id)
            }}>
                <td style={{ width: "50px" }} className="row-gap">{item.id}</td>
                <td key={item.ip} className="flex4 row-gap">{item.ip}</td>
                <td className="flex2 row-gap">{item.port}</td>
                <td className="flex2 row-gap">{item.type}</td>
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
                            <th className="flex4 row-gap">Network IP</th>
                            <th className="flex2 row-gap">Port</th>
                            <th className="flex2 row-gap">Node Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableNode(this.state.projectNodesList)}
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
