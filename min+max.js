function MaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return {max, min};
}
let arr = [3, 5, 1, 8, -2];
console.log(MaxMin(arr));