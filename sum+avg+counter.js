function avg(arr) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        counter++;
    }
    return sum/counter;
}
let arr = [3, 5, 1, 8, -2];
console.log(avg(arr));