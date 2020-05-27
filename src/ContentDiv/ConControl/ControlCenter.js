import React, { Component } from 'react'
import { Button, Card, Dropdown } from 'react-bootstrap'

import * as SwitchCardIndex from "../../DeviceTypeCards/Switch/SwitchIndex"
import ElectraCard from "../../DeviceTypeCards/ElectraCard";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlCenter.css'
export default class ControlCenter extends Component {

    state = {
        location: "All Locations"
    };

    selectedChoice(event) {
        console.log("Selected - " + event);
        this.setState({
            location: event
        });
        console.log("Selected - " + this.state.location);
    }

    renderCard(ViewName) {
        if (!ViewName)
            return "";
        const Card = SwitchCardIndex[ViewName];
        return <Card />;
    }

    render() {
        return (
            <div>
                <Card>
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

                    <Card.Body>
                        <div className="headerRow">
                            <div className="flex6" />
                            <Button className = "flex1" variant="danger">Off All</Button>
                        </div>
                        <ElectraCard/>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
