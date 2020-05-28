import React, { useState } from 'react'

import { ListGroup, Card } from 'react-bootstrap'
import ToggleBtn from "../UtilComponent/ToggleBtn/ToggleBtn";

import "./Card.css";

export default class ElectraCard extends React.Component {

    //const[value, setValue] = useState(false);
    state = {
        value: false
    }


    btnClickRef(id,val) {
        this.props.myFunc(id, val);
        console.log(id + "ECard - " + val);
    
    }
    
    

    render() {

        return (
            <>
                <Card className="childCard" style={{ width: '18rem' }}>
                    <Card.Header className="flex1 row widthManage">
                        <div className="flex5">{this.props.name}</div>
                        <div className="flex1">
                            <ToggleBtn isOn={this.props.isOn} handleToggle={() => { this.setState({ value :!this.state.value}) }} />
                        </div>
                        <button onClick={() => this.btnClickRef(this.props.name, this.props.isOn)}>Click Me</button>
                    </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <div className="nodeRow">
                                <p className="keyName flex3 closeText">Name</p>
                                <p className="flex3 closeText">: {this.props.name}</p>
                            </div>
                            <div className="nodeRow">
                                <p className="keyName flex3 closeText">Status</p>
                                <p className="flex3 closeText">: {displayTest(`${this.state.value}`)}</p>
                            </div>
                            <div className="nodeRow">
                                <p className="keyName flex3 closeText black">Device Location</p>
                                <p className="flex3 closeText">: {this.props.location}</p>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName flex3 closeText black">Electra Node IP</div>
                                <div className="flex3 closeText">: {this.props.ip}</div>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName flex3 closeText black">Port</div>
                                <div className="flex3 closeText">: {this.props.port}</div>
                            </div>
                            <div className="nodeRow">
                                <div className="keyName flex3 closeText black">Node Socket</div>
                                <div className="flex3 closeText">: {this.props.socket}</div>
                            </div>

                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </>
        )
    }

}

function displayTest(value) {

    if (value == 'true') {
        return "ON"
    } else {
        return "OFF"
    }
}