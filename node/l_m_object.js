let cl=require('cli-color')
const person={
    name:"A",
    place:"vga",
    intro:function(){
        console.log(`i am ${cl.blueBright(this.name)} i'm from ${cl.green.bgCyan.underline(this.place)}`);
    },
    msg:function(){
        console.log("sample");

    }

}

module.exports=person
 