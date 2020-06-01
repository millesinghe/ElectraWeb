import React from 'react'

import { ListGroup, Card } from 'react-bootstrap'
// import ToggleBtn from "../UtilComponent/ToggleBtn/ToggleBtn";
import { FaPowerOff } from "react-icons/fa";


import "./Card.css";

export default class ElectraCard extends React.Component {

    state = {
        value: false,
    }

    btnClickRef(card) {
        this.props.myFunc(card.id);
        this.setState({ value: card.isOn});
    }


    render() {
        
        return (
            <>
                <Card className="childCard" style={{ width: '18rem' }}>
                    <Card.Header className="flex1 row widthManage">
                        <div className="flex5">{this.props.card.name}</div>
                        <div className="flex1">
                            {/* <ToggleBtn isOn={this.props.card} handleToggle={() => this.btnClickRef(this.props.card)} />
                             */}
                            <div id="powerdiv" className={`${this.props.card.isOn ? "onState" : ""}`} onClick={() => this.btnClickRef(this.props.card)}><FaPowerOff id ="powerSvg" size='2rem'/></div>
                        </div>

                    </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <div className="nodeRow-card nodeRow">
                                <p className="keyName flex3 closeText">Name</p>
                                <p className="flex3 closeText">: {this.props.card.name}</p>
                            </div>
                            <div className="nodeRow-card nodeRow">
                                <p className="bold900 keyName flex3 closeText">Status</p>
                                <p className="bold900 flex3 closeText">: {displayTest(`${this.props.card.isOn}`)}</p>
                            </div>
                            <div className="nodeRow-card nodeRow">
                                <p className="keyName flex3 closeText black">Device Location</p>
                                <p className="flex3 closeText black">: {this.props.card.location}</p>
                            </div>
                            <div className="nodeRow-card nodeRow">
                                <div className="keyName flex3 closeText black">Electra Node IP</div>
                                <div className="flex3 closeText">: {this.props.card.ip}</div>
                            </div>
                            <div className="nodeRow-card nodeRow">
                                <div className="keyName flex3 closeText black">Port</div>
                                <div className="flex3 closeText">: {this.props.card.port}</div>
                            </div>
                            <div className="nodeRow-card nodeRow">
                                <div className="keyName flex3 closeText black">Node Socket</div>
                                <div className="flex3 closeText">: {this.props.card.socket}</div>
                            </div>

                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </>
        )
    }

}

function displayTest(value) {

    if (value === 'true') {
        return "ON"
    } else {
        return "OFF"
    }
}