# 【5sku】题目：Perimeter of squares in a rectangle  
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : `4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80`

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

#Hint: See Fibonacci sequence

#Ref: http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
```
perimeter(5)  should return 80
perimeter(7)  should return 216
perimeter(20) should return 114624
perimeter(30) should return 14098308
```

# 问题拆解
1. 生成长度为 `n` 的斐波纳契数组 `[1, 1, 2, 3, 5, 8] `
2. 求周长 `4 * (1 + 1 + 2 + 3 + 5 + 8)`

# 我的解题思路
题中给出`n`的范围是[0,+∞) 所以这里不处理`n`的入参，codewars的风格就是这样，专心解题就OK，很多边缘情况不需要考虑。
1. 生成斐波纳契数组
```js
function generateFib(n) {
    if (n < 2) return Array(n + 1).fill(1)
    let arr = [1, 1]
    while (--n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr
}
```

2. 求周长

```js
function perimeter(n){
    return generateFib(n).reduce((sum,cur) => sum + cur) * 4
}
```

3. 一行代码版
```js
/**
 * 生成斐波那契数列
 *
 * Array(n + 1)  是为了循环n+1次
 * fill(1)  是因为空数组reduce会不循环
 * 
 */
const perimeterInOne = n => Array(n + 1).fill(1).reduce(arr => [...arr, (arr[arr.length - 1] || 1) + (arr[arr.length - 2] || 0)], []).reduce((sum, cur) => sum + cur) * 4
```

4. 测试
```js 
console.log(perimeter(0)); // 4
console.log(perimeter(1)); // 8
console.log(perimeter(2)); // 16
console.log(perimeter(5)); // 80
console.log(perimeter(7)); // 216
console.log(perimeter(20)); // 114624
console.log(perimeter(30)); // 14098308
console.log(perimeterInOne(0)); // 4
console.log(perimeterInOne(1)); // 8
console.log(perimeterInOne(2)); // 16
console.log(perimeterInOne(5)); // 80
console.log(perimeterInOne(7)); // 216
console.log(perimeterInOne(20)); // 114624
console.log(perimeterInOne(30)); // 14098308
```

# 大神解
这道题的