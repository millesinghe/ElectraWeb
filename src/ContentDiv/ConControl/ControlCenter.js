import React, { Component } from 'react'
import { Button, Card, Dropdown } from 'react-bootstrap'

import * as SwitchCardIndex from "../../DeviceTypeCards/Switch/SwitchIndex"
import ElectraCard from "../../DeviceTypeCards/ElectraCard";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlCenter.css'
export default class ControlCenter extends Component {

    constructor(){
        super();
        this.getDeviceList();
    }

    state = {
        location: "All Locations",
        cardlist : []
        
    };


    selectedChoice(event) {
        console.log("Selected - " + event);
        this.setState({
            location: event
        });
        console.log("Selected - " + this.state.location);
    }

    renderParentCardHeader() {
        return(
            <div className="headerRow">
                <Card.Header className="flex3" as="h5">{this.state.location}</Card.Header>
                <div>
                    <Dropdown onSelect={(evt) => { this.selectedChoice(evt) }} className="flex1 horizontalCenter">
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            Change Location
                <Dropdown.Menu>
                                <Dropdown.Item eventKey="All Locations">All</Dropdown.Item>
                                <Dropdown.Item eventKey="Kitchen">Kitchen</Dropdown.Item>
                                <Dropdown.Item eventKey="Dinning Room">Dinning Room</Dropdown.Item>
                                <Dropdown.Item eventKey="Milinda's Room">Milinda's Room</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Toggle>
                    </Dropdown>
                </div>
            </div>
        )
    }


    renderCard(ViewName) {
        if (!ViewName)
            return "";
        const Card = SwitchCardIndex[ViewName];
        return <Card />;
    }

    triggerStatus(id, status) {
        console.log("Test Me Triggered" + id + " - " +status);
    }

    getDeviceList(){
        let card = new CardModel("Milinda Light", true, "Milinda Room", "192.168.1.7", "5000","4");
        let card1 = new CardModel("Milinda Standing Fan", false, "Milinda Room", "192.168.1.7", "5000","2");
       
        let myList = this.state.cardlist;
        myList.push(card);
        myList.push(card1);
        
        this.setState({
            cardlist:myList
        });
        console.log("Card Data Loaded" );
    }

    render() {
        
        return (
            <div>
                <Card>
                    {this.renderParentCardHeader}

                    <Card.Body>
                        <div className="headerRow">
                            <div className="flex6" />
                            <Button className="flex1" variant="danger">Off All</Button>
                        </div>

                        <div className="Card-Layout">
                        <ElectraCard
                                name="Milinda Wall Switch"
                                isOn={true}
                                location="Milinda Room"
                                ip="192.168.1.7"
                                port="5000"
                                socket="2"
                                myFunc = {this.triggerStatus.bind(this)}
                            />
                            <ElectraCard
                                name="Milinda Fan"
                                isOn={false}
                                location="Milinda Room"
                                ip="192.168.1.7"
                                port="5000"
                                socket="2"
                                myFunc = {this.triggerStatus.bind(this)}
                            />
                            
                        </div>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export class CardModel {
    constructor(name, isOn, location, ip, port, socket) {
      this.name = name;
      this.isOn = isOn;
      this.location = location;
      this.ip = ip;
      this.port = port;
      this.socket = socket;
    }
  }