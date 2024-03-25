class Hash {
    constructor(size) {
        this.items = new Array(size)
        this.size = size
    }
    _hash(key) {
        let aski = 0
        for (let i = 0; i < key.length; i++) {
            aski += key.charCodeAt(i)
        }
        return aski % this.size
    }
    set(key,value){
        let index=this._hash(key)
        let bucket=this.items[index]
        if(!bucket){
            this.items[index]=[[key,value]]
        }else{
            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey) sameKey[1]=value
            else bucket.push([key,value])
        }
    }


}
let hash = new Hash(10)
// hash.set("adil")
hash._hash("new")
// hash.print()