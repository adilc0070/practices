class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNewNode(newNode,this.root)
        }
    }

    insertNewNode(newNode,root){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNewNode(newNode,root.left)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNewNode(newNode,root.right)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }
        if(root.value===value){
            return true
        }else if(value<root.value){
            this.search(root.left,value)
        }else{
            this.search(root.right,value)
        }
    }
    
}