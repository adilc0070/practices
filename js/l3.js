var array=[14,5,6,8,14,32]
let mini=array[0],maxx=array[0]
let len=array.length

function max()
{
    for(i=0;i<len;i++)
    {
        if(array[i]>maxx)
        {
            maxx=array[i]
        }

    }
    console.log(maxx);
}
function min()
{
    for(i=0;i<len;i++)
    {
        if(array[i]<mini)
        {
            mini=array[i]
        }

    }
    console.log(mini);
}
max()
min()

let largest=Math.max(...array)
let small=Math.min(...array)

console.log(largest);
console.log(small);

let accendng=array.sort((a,b)=>a-b)

console.log(`smallest element:${accendng[0]}`);
console.log(`largest element:${accendng[len-1]}`);
