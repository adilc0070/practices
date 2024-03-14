class Node{
    constructor(){
        this.chidren={}
        this.isEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.chidren[char]){
                node.chidren[char]=new Node()
            }
            node=node.chidren[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.chidren[char]){
                return false
            }
            node=node.chidren[char]
        }
        return node.isEnd
    }
    prefix(word){
        let node=this.root
        for(let char of word){
            if(!node.chidren[char]){
                return []
            }
            node=node.chidren[char]
        }
        let items=[]
        this.dfs(items,word,node)
        return items
    }
    dfs(arr,curr,root){
        if(root.isEnd){
            arr.push(curr)
        }
        for(let char in root.chidren){
            this.dfs(arr,curr+char,root.chidren[char])
        }
    }
}


let trie=new Trie()
trie.insert("adil")
trie.insert("adish")
trie.insert("apple")
trie.insert("banana")
trie.insert("ant")
console.log(
    trie.prefix("a")
);