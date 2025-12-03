function zogiezogi(arr) {
    let x=0;
    let y=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            x++;
        } else {
            y++;
        }
    }
    return {x, y};
}
let arr = [3, 5, 1, 8, 9];
console.log(zogiezogi(arr));