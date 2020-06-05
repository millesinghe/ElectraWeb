import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { ElectraModelNode } from './../../Model/ElectraModelNode'
import './DeviceManagerNode.css'

export default class ElectraNode extends Component {

    state = {
        projectNodesList: [],

        isSelectedNode: "",
        selectedNode: {}
    }

    constructor() {
        super();
        this.loadProjectNodes();
    }


    componentDidUpdate(prevProps, prevState) {
        let varProject = this.props === undefined ? "" : this.props.project;

        let temp = (!(varProject.nodesList === "" || varProject.nodesList === undefined)) && (prevProps.project !== this.props.project) ? this.setState({ projectNodesList: varProject.nodesList }) : ""

    }

    loadProjectNodes() {

        let nodeList = this.state.projectNodesList;

        // let node1 = new ElectraModelNode(1, "192.168.1.7", "5000", "micro");
        // let node2 = new ElectraModelNode(3, "192.168.1.4", "5000", "nano");
        // let node3 = new ElectraModelNode(2, "192.168.1.100", "5000", "micro");

        // nodeList.push(node1);
        // nodeList.push(node2);
        // nodeList.push(node3);

        this.setState({
            projectNodesList: nodeList
        })
    }


    renderToModify(id) {

        this.state.projectNodesList.forEach(scanNode => {
            if (scanNode.id === id) {
                this.setState({
                    selectedNode: scanNode,
                    isSelectedNode: id
                })
                return;
            }
        })
        console.log(id + " - " + this.state.selectedNode.ip);

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

    renderDetailTab() {
        return (<div style={{ paddingTop: "21px" }}>
            <div className="nodeRow">
                <div className="keyName keyName-dm">Project</div>
                <input className="input-dm" value={this.props.project.name === "" || this.props.project.name === undefined ? "" : this.props.project.name} disabled ></input>
            </div>
            <div className="nodeRow">
                <div className="keyName keyName-dm">Node Id :</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "id")} value={this.state.selectedNode.id === "" || this.state.selectedNode.id === undefined ? "" : this.state.selectedNode.id}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName keyName-dm">Node Type :</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "type")} value={this.state.selectedNode.type === "" || this.state.selectedNode.type === undefined ? "" : this.state.selectedNode.type}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName keyName-dm">IP Address :</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "ip")} value={this.state.selectedNode.ip === "" || this.state.selectedNode.ip === undefined ? "" : this.state.selectedNode.ip}></input>
            </div>
            <div className="nodeRow">
                <div className="keyName keyName-dm">Port :</div>
                <input className="input-dm" onChange={this.OnChangeListnerText.bind(this, "port")} value={this.state.selectedNode.port === "" || this.state.selectedNode.port === undefined ? "" : this.state.selectedNode.port}></input>
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

        if (attrib === 'id') {
            this.setState(prevState => ({ selectedNode: { ...prevState.selectedNode, id: event.target.value } }));
        } else if (attrib === 'type') {
            this.setState(prevState => ({ selectedNode: { ...prevState.selectedNode, type: event.target.value } }));
        } else if (attrib === 'ip') {
            this.setState(prevState => ({ selectedNode: { ...prevState.selectedNode, ip: event.target.value } }));
        } else if (attrib === 'port') {
            this.setState(prevState => ({ selectedNode: { ...prevState.selectedNode, port: event.target.value } }));
        }

    }

    render() {
        return (
            <div>
                <div style={{ display: "flex" }} className="card-dm ">
                    <div className="flex1 gap-rx">
                        {this.renderTable()}
                    </div>

                    <div className="flex1 gap-lx bgColor-lgreen curve-margin">
                        {this.renderDetailTab()}
                    </div>
                </div>

            </div>
        )
    }
}
