
class Hash{
    constructor(size){
        this.items=[]
        this.size=size
    }
    hash(key){
        let ASCII=0
        for(let char of key){
            ASCII+=key.charCodeAt(char)
        }
        return ASCII%this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.items[index]=value
    }
    print(){
        console.log(this.items.join(''));
    }



}
const str = "cgfhgdxesdghtfdytdtrd"
let hash=new Hash(10)
for(let i=0;i<str.length;i++){
    hash.set(str[i],str[i])
}

hash.print()
