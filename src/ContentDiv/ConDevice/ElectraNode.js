import React, { Component } from 'react'

import './DeviceManagerNode.css'


export default class ElectraNode extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div style={{ padding: "22px", display: "flex"}}>
                    <div className="flex1">
                        Cat
                    </div>
                    <div className="flex1">
                        <div className="nodeRow">
                            <div className="keyName">Project</div>
                            <div className="midbar" />
                            <input value={this.props.project.name === "" || this.props.project.name === undefined ? "" : this.props.project.name} disabled ></input>
                           </div>
                        <div className="nodeRow">
                            <div className="keyName">Node Type :</div>
                            <div className="midbar" />
                            <input></input>
                        </div>
                        <div className="nodeRow">
                            <div className="keyName">IP Address :</div>
                            <div className="midbar" />
                            <input></input>
                        </div>
                        <div className="nodeRow">
                            <div className="keyName">Port :</div>
                            <div className="midbar" />
                            <input></input>
                        </div>
                    </div>


                </div>
                <div className="nodeRow" style={{ padding: '0px 50px 0 50px', margin: '15px' }}>
                    <button>Cancel</button>
                    <div className="marginGap" />
                    <button>Save</button>
                </div>
            </div>
        )
    }
}
