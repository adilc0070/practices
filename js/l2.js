let word="somthing"
let temp

let len=word.length
word=word.split('')
function rev(){
    for(i=0;i<len/2;i++){
        temp=word[i]
        word[i]=word[len-i-1]
        word[len-i-1]=temp
        
    }
    word=word.join('')
    console.log(word);
}
