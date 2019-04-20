/**
 * 
 * @param {*} array 
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

function reOrderArray(array) {
    // write code here
    let l = array.length;
    for (let i = 1; i < l; i++) {
        let j = i;
        while (j > 0 && array[j] % 2 !== 0 && array[j-1] % 2 === 0) {
            [array[j-1], array[j]] = [array[j], array[j-1]];
            j--;
        }
    }
    return array;
}

var a = [2,4,1,6,5]
console.log(reOrderArray(a));