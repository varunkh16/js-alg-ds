class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    convertArrToLinkedList(arr) {
        let node = new Node(arr[0]);
        this.head = node;
        this.tail = this.head;
        this.length = 1;

        for(let i=1;i<arr.length;i++) {
            node = new Node(arr[i]);
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }

        return this;
    }

    traverseLinkedList() {
        let resArr = [];
        if(this.head) {
            let node = this.head;
            while(node) {
                resArr.push(node.data);
                node = node.next;
            }
        }
        return resArr;
    }

    getLengthOfLL() {
        return this.length;
    }

    checkIfPresent(val) {
        if(this.head) {
            let node = this.head;

            while(node) {
                if(node.data == val) return true;
                node = node.next;
            }
        }
        return false;
    }

    deleteNode(val) {
        if(this.head.data == val) {
            let temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--;
        } else {
            let node = this.head.next;
            let prev = this.head;
            while(node) {
                if(node.data == val) {
                    if(node.next == null) {
                        this.tail = prev;
                    }
                    prev.next = node.next;
                    node.next = null;
                    this.length--;
                } else {
                    prev = node;
                }
                node = node.next;
            }
        }
        return this;
    }

    reverseLL() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i=0;i<this.length;i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

let llInstance = new SinglyLinkedList();

llInstance.convertArrToLinkedList([2,4,6,8,10,12]);

// console.log(llInstance.traverseLinkedList());

// console.log(llInstance.getLengthOfLL());

// console.log(llInstance.checkIfPresent(16));

console.log(llInstance.reverseLL());