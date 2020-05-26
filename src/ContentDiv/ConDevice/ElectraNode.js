import React, { Component } from 'react'
import './DeviceManagerNode.css'

export default class ElectraNode extends Component {
    render() {
        return (
            <div style={{paddingTop: "10px"}}>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Project</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Electra Node Type :</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">IP Address :</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Port :</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                        <button>Cancel</button>
                    <div className="marginGap" />
                        <button>Save</button>
                    </div>
            </div>
        )
    }
}
