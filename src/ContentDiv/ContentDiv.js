import React from 'react'
import DeviceManager from './ConDevice/DeviceManager'

export default class ContentDiv extends React.Component {
    

    renderContentView(val){
        console.log("6-"+val);
        let renderView;
        if (val === "Control Room") {
            renderView = <h1 id="btnIcon">Milinda</h1>
        } else if (val === "Device Manager") {
            renderView = <DeviceManager/>
        } else if (val === "User Management") {
            renderView = <h1 id="btnIcon">Bandara</h1>
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
