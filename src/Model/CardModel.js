export class CardModel {
    constructor(id, name, isOn, location, ip, port, socket) {
        this.id = id;
        this.name = name;
        this.isOn = isOn;
        this.location = location;
        this.ip = ip;
        this.port = port;
        this.socket = socket;
    }
}