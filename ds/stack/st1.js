class Stack{
    constructor(){
        this.stack=[]
    }
    underFlow(){
        return this.stack.length===0
    }
    push(value){
         this.stack.push(value)
    }
    pop(){
        return this.stack.pop()
    }
    print(){
        if(this.stack.length==0){
            console.log('stack under flow');
        }
        console.log(this.stack);
    }
    peek(){
        console.log(this.stack[this.stack.length-1]);
    }
    bottom(){
        console.log(this.stack[0]);
    }
}