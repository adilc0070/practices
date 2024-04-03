class Node{
    constructor(){
        this.list={}
        this.end=false
    }
}

class Trieee{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.list[char]){
                node.list[char]=new Node()
            }
            node=node.list[char]
        }
        node.end=true    
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.list[char]){
                return false
            }
            node=node.list[char]
        }
        return node.end
    }
    prifix(word){
        let node=this.root
        for(let char of word){
            if(!node.list[char]){
                console.log([]);
                return []

            }
            node=node.list[char]
        }
        let items=[]
        this.itemss(word,items,node)
        console.log(items);
        return items
    }
    itemss(curr,arr,node){
        if(node.end){
            arr.push(curr)
        }
        for(let char in node.list){
            this.itemss(curr+char,arr,node.list[char])
        }
    }
}


let tr=new Trieee()
tr.insert('head')
tr.insert('head')
tr.insert('al')
tr.insert('adil')
// console.log(tr.root.list);
tr.prifix('a')

console.log(tr.search('heads'));