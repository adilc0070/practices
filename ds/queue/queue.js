class Queue{
    constructor(){
        this.list=[]
    }
    isEmpty(){
        return this.list.length===0
    }
    getSize(){
        return this.list.length
    }
    enqueue(value){
        this.list.push(value)
    }
    dequeue(){
        this.list.shift()
    }
    peek(){
        console.log(this.list[this.getSize()-1])
    }
    front(){
        console.log(this.list[0])
    }
    print(){
        if(!this.isEmpty()) {

            console.log(this.list.join('<-'))
        }
        else {
        console.log('list is empty');
        }
    }
    removeMid(){
        if(this.isEmpty()) return -1
        let mid= Math.floor(this.getSize()/2)
        return this.list.splice(mid,1)[0]
    }
    clear(){
        this.list=[]
    }
    search(value){
        return this.list.includes(value)
    }
    indexOf(value){
        return this.list.indexOf(value)
    }
}


let qu=new Queue()
qu.enqueue(10)
qu.enqueue(100)
qu.enqueue(1000)
qu.enqueue(10000)
qu.enqueue(100000)
// qu.clear()
// qu.front()
// qu.peek()
// qu.dequeue()
// console.log(qu.removeMid())
qu.print()