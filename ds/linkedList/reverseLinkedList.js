class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LL{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
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
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=newNode
        }
        this.size++
    }
    reverse(){
        let prev=null
        let curr = this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    print(){
        let listItem=[]
        let curr=this.head
        while(curr){
            listItem.push(curr.value)
            curr=curr.next
        }
        console.log(listItem.join('->'));
    }
    search(value){
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.head
            while(curr){
                if(curr.value===value){
                    return true
                }
                curr=curr.next
            }
            return false
        }
    }
    
}


let linkedList=new LL()
linkedList.prepend(19)
linkedList.prepend(10)
linkedList.apend(11)
linkedList.apend(12)
linkedList.reverse()
linkedList.print()