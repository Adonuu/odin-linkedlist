class node {
    constructor() {
        this.nextNode = null;
        this.value = null;
    }

    setValue(value) {
        this.value = value;
    }

    setNextNode(nextNode) {
        this.nextNode = nextNode;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {

        // create node
        let newNode = new Node();
        newNode.setValue(value);

        // if the list is empty (meaning head is null) node is at the start of the list
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNextNode(newNode);
            this.tail = newNode;
        }
    }

    prepend(value) {
        
        // create node
        let newNode = new Node();
        newNode.setValue(value);

        // if the list is empty (meaning head is null) node is at the start of the list
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNextNode(this.head);
            this.head = newNode;
        }
    }

    size() {
        // traverse through the list until nextNode property is null
        let count = 0;

        let startNode = this.head;
        while (startNode != null) {
            count++;
            startNode = startNode.nextNode;
        }

        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }
}