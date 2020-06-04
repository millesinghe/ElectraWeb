import React, { Component } from 'react'
import { Button, Card, Dropdown } from 'react-bootstrap'

import * as SwitchCardIndex from "../../DeviceTypeCards/Switch/SwitchIndex"
import ElectraCard from "../../DeviceTypeCards/ElectraCard";
import {CardModel} from "./../../Model/CardModel"

import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlCenter.css'
export default class ControlCenter extends Component {


    componentWillMount(){
        this.getDeviceList();
    }

    state = {
        location: "All Locations",
        cardlist: []

    };


    selectedChoice(event) {
        this.setState({
            location: event
        });
    }

    renderParentCardHeader() {
        return (
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

    triggerStatus(id) {
        this.state.cardlist.forEach(card => {
            if (card.id === id) {
                card.isOn = !card.isOn;
            }

        });

    }

    getDeviceList() {
        let card1 = new CardModel(1, "Milinda Standing Fan", false, "Milinda Room", "192.168.1.7", "5000", "2");
        let card3 = new CardModel(3, "Milinda Dress Table Light", false, "Milinda Room", "192.168.1.7", "5000", "3");
        let card2 = new CardModel(2, "Milinda Air Conditioner", false, "Milinda Room", "192.168.1.7", "5000", "2");

        let myList = this.state.cardlist;
        myList.push(card1);
        myList.push(card2);
        myList.push(card3);

        this.setState({
            cardlist: myList
        });
    }

    turnOffAll() {
        let myList = this.state.cardlist.map(card => {
            card.isOn = false;
            return card;
        });

        this.setState({ 
            cardlist : myList
        });
        console.log("Close All" + this.state.cardlist);
        
    }

    render() {

        return (
            <div>
                <Card>
                    {this.renderParentCardHeader()}

                    <Card.Body>
                        <div className="headerRow">
                            <div className="flex6" />
                            <Button onClick={() => { this.turnOffAll(); }} className="flex1" variant="danger">Off All</Button>
                        </div>

                        <div className="Card-Layout">
                            {this.state.cardlist.map(card => (
                                <ElectraCard key={card.id} card={card}
                                    myFunc={this.triggerStatus.bind(this)}
                                />
                            ))}
                        </div>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}