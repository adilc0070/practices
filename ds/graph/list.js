class Graph {
    constructor() {
        this.agdList = {}
    }
    addVertex(vertex) {
        if (!this.agdList[vertex]) this.agdList[vertex] = new Set()
    }
    addEdge(vertex1, vertex2) {
        if (!this.agdList[vertex1]) this.addVertex(vertex1)
        if (!this.agdList[vertex2]) this.addVertex(vertex2)

        this.agdList[vertex1].add(vertex2)
        this.agdList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.agdList){
            console.log(`${vertex} -> ${[...this.agdList[vertex]]} `);
        }
    }
    hasEdge(vertex1,vertex2){
        if(!this.agdList[vertex1]||!this.agdList[vertex2]) return false
        return this.agdList[vertex1].has(vertex2)&&this.agdList[vertex2].has(vertex1)
    }
    deleteEdge(vertex1,vertex2){
        this.agdList[vertex1].delete(vertex2)
        this.agdList[vertex2].delete(vertex1)
    }
    deleteVertex(vertex){
        if(this.agdList[vertex]){
            for(let vertex2 of this.agdList[vertex]){
                this.deleteEdge(vertex,vertex2)
            }
            delete this.agdList[vertex]
        }
    }dfs(vertex) {
        let visited = {};
        this.dfsRecursive(vertex, visited);
    }
    
    dfsRecursive(vertex, visited) {
        if (!this.agdList[vertex]) return;
    
        visited[vertex] = true;
        console.log(vertex);
    
        for (let child of this.agdList[vertex]) {
            if (!visited[child]) {
                this.dfsRecursive(child, visited);
            }
        }
    }
    
}
let grp=new Graph()
grp.addEdge('a','b')
grp.addEdge('a','c')
grp.addEdge('a','A')

// grp.display()
grp.dfs('b')
// console.log(grp.hasEdge('A','a'));
