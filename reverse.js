function Rev(arr)
{
    let box="";
    for(let i=arr.length-1;i>=0;i--)
    {
        box+=arr[i]+" ";     
        
    }
    return box;
}
let arr=[1,2,3,4,5];
console.log(Rev(arr));
