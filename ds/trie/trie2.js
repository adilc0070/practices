class Node{
    constructor(){
        this.child={}
        this.isEnd=false
    }
}

class Trie1{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node=node.child[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return node.isEnd
    }
    prefix(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                return []
            }
            node=node.child[char]
        }
        let items=[]
        this.dfs(word,items,node)
    }
    dfs(curr,arr,root){
        if(root.isEnd){
            arr.push(curr)
        }
        for(let char in root.child){
            this.dfs(curr+curr,arr,root.child[char])
        }

    }
}
