// `4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80`

/**
 * 生成斐波那契数列
 * 
 * 思路版
 * 
 */
function generateFib(n) {
    if (n < 2) return Array(n + 1).fill(1)
    let arr = [1, 1]
    while (--n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr
}

function perimeter(n) {
    return generateFib(n).reduce((a, b) => a + b) * 4
}

/**
 * 生成斐波那契数列
 *
 * 一行代码版
 * 
 */
const perimeterInOne = n => Array(n + 1)
    .fill(1)
    .reduce(arr => [...arr, (arr[arr.length - 1] || 1) + (arr[arr.length - 2] || 0)], [])
    .reduce((a, b) => a + b) * 4

console.log(perimeter(0));
console.log(perimeter(1));
console.log(perimeter(2));
console.log(perimeter(5));
console.log(perimeter(7));
console.log(perimeter(20));
console.log(perimeter(30));
console.log(perimeterInOne(0));
console.log(perimeterInOne(1));
console.log(perimeterInOne(2));
console.log(perimeterInOne(5));
console.log(perimeterInOne(7));
console.log(perimeterInOne(20));
console.log(perimeterInOne(30));

function encrypt(text, n) {
    return n <= 0 || !text ?
        text :
        text.split('')
        .map((i, k) => text
            .split('')
            .splice((Math.pow(2, n) * (k + 1) - 1) % (text.length % 2 == 0 ? text.length + 1 : text.length), 1)[0])
        .join('') 
}

p1 = ''
p2 = ''
p3 = 'Y3Vyc29yOnYyOpO5MjAxOS0wMy0yOVQxNDo0MjozMCswODowMADOCbY3Jg=='
p4 = 'Y3Vyc29yOnYyOpO5MjAxOS0wMy0yOVQxNDo0MjowNyswODowMADOCbY2wg=='
p4 = 'Y3Vyc29yOnYyOpO5MjAxOS0wMy0yOVQxNDo0MTo0MyswODowMADOCbY2VA=='