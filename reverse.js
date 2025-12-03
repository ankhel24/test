function Rev(arr)
{
    let txt="";
    for(let i=arr.length-1;i>=0;i--)
    {
        txt+=arr[i]+" ";     
        
    }
    return txt;
}
let arr=[1,2,3,4,5];
console.log(Rev(arr));
