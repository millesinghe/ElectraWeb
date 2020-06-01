import React, { Component } from 'react'

export default class ElectraDevice extends Component {
    render() {
        return (

            <div>
                <div>
                    <div style={{ padding: "22px", display: "flex" }}>
                        <div className="flex1">
                            Cat
                </div>
                        <div className="flex1">
                            <div className="nodeRow">
                                <div className="keyName">Project Name</div>
                                <div className="midbar" />
                                <input value={this.props.project.name === "" || this.props.project.name === undefined ? "" : this.props.project.name} disabled ></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName">Device Name*</div>
                                <div className="midbar" />
                                <input></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName">Device Group/Location</div>
                                <div className="midbar" />
                                <input></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName">Device Category</div>
                                <div className="midbar" />
                                <input></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName">Default Value</div>
                                <div className="midbar" />
                                <input></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName">Connected Node</div>
                                <div className="midbar" />
                                <input></input>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName">Device Connector Slot</div>
                                <div className="midbar" />
                                <input></input>
                            </div>

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
