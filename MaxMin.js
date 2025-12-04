function MaxMin(names,ages)
{
    let max=ages[0];
    let min=ages[0];
    let MaxName=names[0];
    let MinName=names[0];
    for (let i = 1; i < ages.length; i++)
    {
        if(ages[i]>max)
        {
            max=ages[i];
            MaxName=names[i];
        }
        else if(ages[i]<min)
        {
            min=ages[i];
            MinName=names[i];
        }
    }
    return {MaxName, max, MinName, min};
}
let names = ["Ankhel","Bunty","Chintu","Dinku"];
    let ages = [20,21,19,18];
console.log(MaxMin(names,ages));