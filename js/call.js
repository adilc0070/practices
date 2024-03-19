function fullName(){
    console.log(this.firstName,this.secondName);
}

let adilc={
    firstName:"adil",
    secondName:"c"
}
let nishad={
    firstName:"nishad",secondName:"Ali"
}
fullName.call(adilc)
let nis=fullName.bind(nishad)
console.log(nis)
fullName.apply(["adi","lc"])