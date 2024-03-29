class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LL{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size===0
    }
    prepend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    apend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
        }
        this.size++
    }
    print(){
        let items=[]
        let curr=this.head
        if(!this.isEmpty()){
            while(curr){
                items.push(curr.value)
                curr=curr.next
            }
            console.log('new' ,items.join('->'))
        }
    }
}

let inkedList=new LL()
inkedList.prepend(10)
inkedList.prepend(11)
inkedList.prepend(12)
inkedList.apend(13)
inkedList.print()