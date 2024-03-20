function reverse (s){
    if(s===''||s.length===1){
        return s
    }
    return s.slice(-1)+reverse(s.slice(0,-1))
}


console.log(reverse('adilc'));