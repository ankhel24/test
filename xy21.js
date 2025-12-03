function xy(arr,x,y)
{
    let counter=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%x==0 && arr[i]%y==0)
        {
            counter++;
        }
    }
    return counter;
}
let x=3;
let y=2;
let arr=[3,6,9,12,15,18,20,24];
console.log(xy(arr,x,y));