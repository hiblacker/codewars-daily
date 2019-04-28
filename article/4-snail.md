# Codewars刷题升级4 - 【蜗牛排序】- 4sku - Snail Sort
给定一个`n x n`二维数组，返回按顺时针方向从最外层元素排列到中间元素的数组。

```js
let array = [
        [1,2,3],
        [4,5,6],
        [7,8,9]]
snail(array) => [1,2,3,6,9,8,7,4,5]
let array2 = [
        [1,2,3,1],
        [4,5,6,4],
        [7,8,9,7],
        [7,8,9,7]]
snail(array2) => [1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8]
```

如图：

![](http://qiniu.lanjinrong.com/d5b9a71a9b418d71a3539de5713a6220)

NOTE: 其思想不是将元素从最低值排序到最高值;其思想是按照顺时针蜗牛壳模式遍历二维数组.

NOTE 2: `0x0`(空矩阵)表示为`[[]]`


# 问题拆解
1. 顺时针取最外层元素，并删除
2. 递归至最里层

# 解题
看到这道题的第一眼我是懵逼的，满脑瓜问号，可以说一点思路没有，更别说一行代码解决问题了。但很多事情就是这样，多琢磨，多思考，就会得到答案。世上无难事只怕有心人，很有道理。直接贴我的一坨shit吧，当然你也可以直接跳到精选解：

```js
let snail = function (array) {
    let n = array[0].length
    if (n === 0) return []
    let copyArr = array
    let newArr = []
    circle(copyArr)
    
    function circle(copyArr) {
        let n = copyArr[0].length
        // 先取最外层的数据
        if (copyArr[0].length === 1) {
            newArr.push(copyArr[0][0])
            return
        }
        for (let i = 0; i < n; i++) {
            newArr.push(copyArr[0][i])
        }
        for (let i = 1; i < n; i++) {
            newArr.push(copyArr[i][n - 1])
        }
        for (let i = n - 2; i > 0; i--) {
            newArr.push(copyArr[n - 1][i])
        }
        for (let i = n - 1; i > 0; i--) {
            newArr.push(copyArr[i][0])
        }
        // 删掉最外层数据
        // 删除第n行
        copyArr.splice(n-1, 1)
        // 删除第0行
        copyArr.splice(0, 1)
        // 删除两边
        copyArr = copyArr.map(i => {
            i.pop()
            i.shift()
            return i
        })
        // 删除空数组
        copyArr.map((i, k) => i.length === 0 ? copyArr.splice(k, 1) : '')
        // 保证[[]]结构
        if(!copyArr[0]) copyArr[0]=[]
        if (copyArr[0].length > 0) circle(copyArr)

    }
    return newArr
}
```


# Codewars精选解
看看点赞高的解，再看看自己的，我...... excuse me?

巧妙利用数组的`shift()`和`pop()`方法，`shift()`删除数组第一项并返回删除的元素，该方法会改变原数组，
```js
snail = function(array) {
    var result;
    while (array.length) {
        // Steal the first row.
        result = (result ? result.concat(array.shift()) : array.shift());
        // Steal the right items.
        for (var i = 0; i < array.length; i++)
        result.push(array[i].pop());
        // Steal the bottom row.
        result = result.concat((array.pop() || []).reverse());
        // Steal the left items.
        for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i].shift());
    }
    return result;
}
```

# 本题相关知识
1. [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
2. [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)


[欢迎star](https://github.com/hiblacker/codewars-daily)

(完)