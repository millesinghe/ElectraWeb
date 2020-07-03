import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { Button, Card, Dropdown } from 'react-bootstrap'

import * as SwitchCardIndex from "../../DeviceTypeCards/Switch/SwitchIndex"
import ElectraCard from "../../DeviceTypeCards/ElectraCard";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlCenter.css'


let isProjectSelected;

export default function ControlCenter() {

    const [location, setLocation] = useState("All Locations")
    const [cardlist, setCardlist] = useState([]);
    const [locationlist, setLocationlist] = useState([]);
    const [projectDevicesList, setProjectDevicesList] = useState([]);

    const electraProject = useSelector(state => state.project);
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
        console.log(event);
        setLocation(event);
    }

    // eslint-disable-next-line
    function setDeviceList() {
        let varProject = electraProject.id === undefined ? "" : electraProject;
        let tempNodeList = (!(varProject.nodesList === "" || varProject.nodesList === undefined)) && (prevProject !== electraProject) ?
            varProject.nodesList : "";

        let deviceList = []
        let locationCollector = []
        if (tempNodeList.length > 0) {
            // eslint-disable-next-line
            let tempDevices = tempNodeList.map(scNode => {
                // eslint-disable-next-line
                scNode.deviceList.map(dev => {
                    dev.connectedNode = scNode.id;
                    dev.nodeIp = scNode.ip;
                    dev.nodePort = scNode.port;
                    deviceList.push(dev);
                    if (!arrayContains(locationCollector, dev.groupName)) {
                        locationCollector.push(dev.groupName);
                    }
                });
            })
        }

        // Nail
        if (isProjectSelected !== false && prevProject !== electraProject.id) {
            setProjectDevicesList(deviceList);
            setLocationlist(locationCollector);
            isProjectSelected = false;

            getDeviceList();
            console.log("setProject - " + electraProject.id)

        } else if (isProjectSelected === false) {
            isProjectSelected = true;
        }

    }

    function arrayContains(array, obj) {
        var i = array.length;
        while (i--) {
            if (array[i] === obj) {
                return true;
            }
        }
        return false;
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
                                <Dropdown.Item key="All Locations" eventKey="All Locations">All</Dropdown.Item>
                                {locationlist.map((loc) =>
                                    //testRender({location}, loc))};
                                    <Dropdown.Item key={loc} eventKey={loc}>{loc}</Dropdown.Item>
                                )};
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
        // let card1 = new CardModel(10, "Milinda Standing Fan", false, "Milinda Room", "192.168.1.7", "5000", "2");
        setCardlist(projectDevicesList);
    }

    function turnOffAll() {
        let myList = cardlist.map(card => {
            card.isOn = false;
            return card;
        });

        setCardlist(myList);
        console.log("Close All" + cardlist);

    }

    
    function filterCard(card) {
        let selected = {location};
        if(selected.location === "All Locations" || selected.location=== card.groupName){
            return <ElectraCard key={card.id} card={card}
            myFunc={triggerStatus.bind(this)}
        />
        }
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
                            filterCard(card)
                        ))}
                    </div>

                </Card.Body>
            </Card>
        </div>
    )

}