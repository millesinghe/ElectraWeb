import React from 'react'
import DeviceManager from './ConDevice/DeviceManager'
import ControlCenter from './ConControl/ControlCenter'

export default class ContentDiv extends React.Component {


    renderContentView(val) {
        let renderView;
        if (val === "Control Room") {
            renderView = <>
                <div id="header"><h1>Control Room</h1></div>
                <ControlCenter />
            </>
        } else if (val === "Device Manager") {
            renderView = <>
                <div id="header"><h1>Device Manager</h1></div>
                <DeviceManager />
            </>
        } else if (val === "User Management") {
            renderView = <>
                {/* <div id="header"><h1>Device Manager</h1></div> */}

                <h5 style={{ textAlign: 'center' }}>This feature is</h5>
                <h1 style={{ textAlign: 'center' }}>Coming Soon...</h1>
            </>
        }
        return renderView;
    }

    render() {
        return (
            <div>
                {this.renderContentView(this.props.renderView)}
            </div>
        )
    }

}
