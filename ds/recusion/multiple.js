function multpleOf(n,limit=1){
    if(limit>12){
        return 
    }
    console.log(n*limit);
    return multpleOf(n,limit+1)
}
multpleOf(5)