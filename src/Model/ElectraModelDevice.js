export class ElectraModelDevice {
    constructor(id, name, groupName, type, defaultValue, project, connectedNode, connectedSlot) {
        this.id = id;
        this.name = name;
        this.groupName = groupName;
        this.type = type;
        this.defaultValue = defaultValue;
        this.project = project;
        this.connectedNode = connectedNode;
        this.connectedSlot = connectedSlot;
    }
}