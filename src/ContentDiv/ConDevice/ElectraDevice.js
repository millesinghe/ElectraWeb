import React, { Component } from 'react'

export default class ElectraDevice extends Component {
    render() {
        return (
            <div style={{ paddingTop: "10px" }}>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Device Name*</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Device Group/Location</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Device Category</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Default Value</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Project Name</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Connected Node</div>
                    <div className="midbar" />
                    <input></input>
                    <div className="marginGap" />
                </div>
                <div className="nodeRow">
                    <div className="marginGap" />
                    <div className="keyName">Device Connector Slot</div>
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
