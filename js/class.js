


class Submain{
    
    hei(a,b) {
        console.log(a+b);
        console.log("i am from submain");       
    }
}

class Main extends Submain{
    hei(a,b){
        console.log(a+b);
    }
    
}

let as=new Main
as.hei(10,5)