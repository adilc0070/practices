class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

class LL {
    constructor() {
        this.head = null,
            this.size = 0
    }
    getSize() {
        return this.size
    }
    isEmpty() {
        return this.size == 0
    }
    prepend(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    apend(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = newNode
        }
        this.size++
    }
    print() {
        if (this.isEmpty()) {
            console.log('List Is Empty');
        } else {
            let listItem = ''
            let curr = this.head
            while (curr) {
                listItem += `${curr.value} `
                curr = curr.next
            }
            console.log(listItem);
        }
    }
    insert(value, index) {
        if (index > this.getSize() || index < 0) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let newNode = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
            this.size++

        }
    }
    findMId() {
        let mid = Math.floor(this.getSize() / 2)
        let prev = this.head
        for (let i = 0; i < mid; i++) {
            prev = prev.next
        }
        return prev.value
    }
    findMidEsize(){
        if(this.head){
            let slow=this.head
            let fast=this.head
            while(fast && fast.next){
                slow=slow.next
                fast=fast.next.next
            }
            return slow.value
        }
    }
    removeValue(value){
        if(this.isEmpty()) return
        else{
            let curr=this.head
            if(curr.value===value){
                this.head=curr.next
            }else{
                while(curr.next && curr.next.value!==value){
                    curr=curr.next
                }
                if(curr.next){
                    curr.next=curr.next.next
                }

            }
            this.size--
        }
    }
}

let linked = new LL()
linked.prepend(5)
linked.prepend(6)
linked.apend(7)
linked.prepend(1)
linked.apend(3)
linked.prepend(2)
linked.apend(4)
// linked.insert("inserted at 4", 4)
linked.removeValue(1)
linked.print()

console.log(linked.findMidEsize());


