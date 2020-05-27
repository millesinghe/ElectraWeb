import React from 'react'

import { ListGroup, Card } from 'react-bootstrap'
import Switch from "./../UtilComponent/Switch/Switch";

import "./Card.css";

export default function ElectraCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header className="flex1 row widthManage">
                    <div className="flex5">Milinda</div>
                    <div className="flex1"> <Switch /></div>
                    </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div className="nodeRow">
                            <p className= "keyName flex3 closeText">Name</p>
                            <p className= "flex3 closeText">:112</p>
                        </div>
                        <div className="nodeRow">
                            <p className= "keyName flex3 closeText">Status</p>
                            <p className= "flex3 closeText">:112</p>
                        </div>
                        <div className="nodeRow">
                            <p className= "keyName flex3 closeText black">Device Location</p>
                            <p className= "flex3 closeText">:Milinda Room</p>
                        </div>
                        <div className="nodeRow">
                            <div className= "keyName flex3 closeText black">Electra Node IP</div>
                            <div className= "flex3 closeText">:112</div>
                        </div>
                        <div className="nodeRow">
                            <div className= "keyName flex3 closeText black">Port</div>
                            <div className= "flex3 closeText">:112</div>
                        </div>
                        <div className="nodeRow">
                            <div className= "keyName flex3 closeText black">Node Socket</div>
                            <div className= "flex3 closeText">:112</div>
                        </div>

                        
                    </ListGroup.Item>

                </ListGroup>
            </Card>
        </div>
    )
}
