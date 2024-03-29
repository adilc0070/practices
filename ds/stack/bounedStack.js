class Stack {
    constructor(size) {
        this.items = []
        this.size = size
    }
    stackSize() {
        return this.size - this.items.length
    }
    underFlow(){
        return this.items.length===0
    }
    overFlow() {
        return this.items.length >= this.size;
    }
    push(value) {
        if (!this.overFlow()) {
            this.items.push(value);
        } else {
            console.log("Stack is full",value,'not inserted');
        }
    }

    pop() {
        if (!this.underFlow()) {
            return this.items.pop();
        } else {
            console.log('Stack underflow');
        }
    }
    print(){
        if(!this.underFlow()){
            console.log(this.items);
        }else{
            console.log("Stack is empty");
        }
    }



}


let stack=new Stack(5)
stack.push(18+1)
stack.push(18+2)
stack.push(18+3)
stack.push(18+4)
stack.push(18+5)
stack.push(18+6)
// stack.pop()
// stack.pop()
stack.print()