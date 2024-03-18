class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LL {
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
    prepend(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
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
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    search(val) {
        if (this.isEmpty()) {
            console.log(false);
            return;
        }
        let current = this.head;
        while (current) {
            if (current.value === val) {
                console.log(true);
                return;
            }
            current = current.next;
        }
        console.log(false);
    }
    
    insert(index,value){
        if(index<0||index>this.getSize()){
            return -1
        }
        if(index===0){
            this.prepend(value)
        }else if (index === this.getSize()) {
            this.apend(value);
        }else{
            let curr=this.head
            let newNode=new Node(value)
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            newNode.next=curr.next
            curr.next=newNode
          this.size++
        }
    }


}

let linkedList = new LL()
linkedList.prepend('hellow')
linkedList.prepend(1)
linkedList.prepend(2)
linkedList.apend(3)
linkedList.apend(6)
linkedList.apend(4)
linkedList.apend(5)
linkedList.search(3)



console.log(JSON.stringify(linkedList, null, 2));