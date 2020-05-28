import React from 'react'
import DeviceManager from './ConDevice/DeviceManager'
import ControlCenter from './ConControl/ControlCenter'

export default class ContentDiv extends React.Component {
    

    renderContentView(val){
        console.log("6-"+val);
        let renderView;
        if (val === "Control Room") {
            renderView = <ControlCenter/>
        } else if (val === "Device Manager") {
            renderView = <DeviceManager/>
        } else if (val === "User Management") {
            renderView = <h1>Coming Soon...</h1>
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
