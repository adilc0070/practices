//bst
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertValue(this.root, newNode)
        }
    }
    insertValue(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertValue(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertValue(root.right, newNode)
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
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    bfs(){
        let que=[]
        if(this.root){
            que.push(this.root)
            while(que.length){
                let curr=que.shift()
                console.log(curr.value);
                if(curr.left){
                    que.push(curr.left)
                }
                if(curr.right){
                    que.push(curr.right)
                }
            }            
        }
    }
}