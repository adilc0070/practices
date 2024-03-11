class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    enqueue(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    dequeue() {
        if (this.isEmpty()) return -1
        else if (this.getSize() === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = this.head.next
        }
        this.size--
    }

    print() {
        if (this.isEmpty()) console.log('queue is Empty')
        else {
            let items = []
            let curr = this.head
            while (curr) {
                items.push(curr.value)
                curr = curr.next
            }
            console.log(items.join('<-'));
        }
    }
    peek(){
        if(!this.isEmpty()) console.log(this.tail.value);
        else return 
    }
    front(){
        if(!this.isEmpty()) console.log(this.head.value);
        else return 
    }
    clear(){
        this.head=null
        this.size=0
    }
}


let qu = new Queue()
qu.enqueue(10)
qu.enqueue(100)
qu.enqueue(1000)
qu.enqueue(10000)
qu.dequeue()
qu.dequeue()
qu.print()
qu.clear()
qu.enqueue(10)
qu.enqueue(100)
qu.enqueue(1000)
qu.enqueue(10000)
// qu.dequeue()
// qu.dequeue()
qu.print()