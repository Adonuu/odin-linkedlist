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
        let newNode = new node();
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

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if (index < 0) return null;

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            if (currentIndex === index) return currentNode;

            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return null;
    }

    pop() {
        if (this.head === null) return null;

        if (this.head === this.tail)
        {
            this.head = null;
            this.tail = null;
            return;
        }

        let currentNode = this.head;
        while (currentNode.nextNode != this.tail) {
            currentNode = currentNode.nextNode;
        }

        this.tail = currentNode;
    }

    contains(value) {
        if (this.head === null) return false;

        let currentNode = this.head;
        while(currentNode != null) {
            if (currentNode.value = value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        if (this.head === null) return null;

        let currentNode = this.head;
        while(currentNode != null) {
            if (currentNode.value = value) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    toString() {
        if (this.head === null) return null;

        let currentNode = this.head;
        let stringToPrint = '';
        while(currentNode != null) {
            if (currentNode === this.tail) {
                stringToPrint = stringToPrint + '( ' + currentNode.value + ' )';
            } else {
                stringToPrint = stringToPrint + '( ' + currentNode.value + ' ) -> ';
            }
            currentNode = currentNode.nextNode;
        }

        return stringToPrint;
    }
}

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());