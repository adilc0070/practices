class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LL{
    constructor() {
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
    print(){
        let out=''
        let curr=this.head
        while(curr){
            out+=`${curr.value}`
            curr=curr.next
        }

        console.log(out);
    }
}


function reversre(str){
    let linked=new LL()
    for(let i=0;i<str.length;i++){
        linked.prepend(str[i])
    }
    linked.print()
}


reversre("am adil from linkedlist")