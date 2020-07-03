import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { Button, Card, Dropdown } from 'react-bootstrap'

import * as SwitchCardIndex from "../../DeviceTypeCards/Switch/SwitchIndex"
import ElectraCard from "../../DeviceTypeCards/ElectraCard";
import { CardModel } from "./../../Model/CardModel"

import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlCenter.css'


let isProjectSelected;

export default function ControlCenter() {

    const [location, setLocation] = useState("All Locations")
    const [cardlist, setCardlist] = useState([]);
    const [projectDevicesList, setProjectDevicesList] = useState([]);

    const electraProject = useSelector(state => state.project);
    //const isProjectChanged = useSelector(state => state.isProjectSelect);
    const prevProject = usePrevious(electraProject);


    // getPrevProperty
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        }, []);
        return ref.current;
    }

    useEffect(() => {
        console.log("check");
        setDeviceList();
    });

    // eslint-disable-next-line
    function loadProjectDevices() {

        let deviceList = this.state.projectDevicesList;

        setProjectDevicesList(deviceList);
    }

    function selectedChoice(event) {
        setLocation(event);
    }

    // eslint-disable-next-line
    function setDeviceList() {
        let varProject = electraProject.id === undefined ? "" : electraProject;
        let tempNodeList = (!(varProject.nodesList === "" || varProject.nodesList === undefined)) && (prevProject !== electraProject) ?
            varProject.nodesList : "";

        let deviceList = []
        if (tempNodeList.length > 0) {
            // eslint-disable-next-line
            let tempDevices = tempNodeList.map(scNode => {
                // eslint-disable-next-line
                scNode.deviceList.map(dev => { dev.connectedNode = scNode.id; deviceList.push(dev) });
            })
        }

        // Nail
        if (isProjectSelected !== false && prevProject !== electraProject.id) {
            setProjectDevicesList(deviceList);
            isProjectSelected = false;
            console.log("setProject - " + electraProject.id)
        } else if (isProjectSelected === false){
                isProjectSelected = true;
        }

    }

    function renderParentCardHeader() {
        return (
            <div className="headerRow">
                <Card.Header className="flex3" as="h5">{location}</Card.Header>
                <div>
                    <Dropdown onSelect={(evt) => { selectedChoice(evt) }} className="flex1 horizontalCenter">
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

    // eslint-disable-next-line
    function renderCard(ViewName) {
        if (!ViewName)
            return "";
        const Card = SwitchCardIndex[ViewName];
        return <Card />;
    }

    function triggerStatus(id) {
        cardlist.forEach(card => {
            if (card.id === id) {
                card.isOn = !card.isOn;
            }

        });

    }

    // eslint-disable-next-line
    function getDeviceList() {
        let card1 = new CardModel(1, "Milinda Standing Fan", false, "Milinda Room", "192.168.1.7", "5000", "2");
        let card3 = new CardModel(3, "Milinda Dress Table Light", false, "Milinda Room", "192.168.1.7", "5000", "3");
        let card2 = new CardModel(2, "Milinda Air Conditioner", false, "Milinda Room", "192.168.1.7", "5000", "2");

        let myList = cardlist;
        myList.push(card1);
        myList.push(card2);
        myList.push(card3);

        setCardlist(myList);
    }

    function turnOffAll() {
        let myList = cardlist.map(card => {
            card.isOn = false;
            return card;
        });

        setCardlist(myList);
        console.log("Close All" + cardlist);

    }

    return (
        <div>
            <Card>
                {renderParentCardHeader()}
                <Card.Body>
                    <div className="headerRow">
                        <div className="flex6" />
                        <Button onClick={() => { turnOffAll(); }} className="flex1" variant="danger">Off All</Button>
                    </div>

                    <div className="Card-Layout">
                        {cardlist.map(card => (
                            <ElectraCard key={card.id} card={card}
                                myFunc={triggerStatus.bind(this)}
                            />
                        ))}
                    </div>

                </Card.Body>
            </Card>
        </div>
    )

}