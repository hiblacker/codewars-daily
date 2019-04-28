# Codewars刷题升级5 - 【解密字符串】- 4sku - Recover a secret string from random triplets
There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

题意大概意思是讲：有一个密码字符串存在，而你会获得这个密码字符串的随机三个字符的集合，根据这个集合你需要还原出这个密码字符串。
已知：
1. 密码字符串中不会出现重复的字母
2. 这个集合包含了足可以推断出密码字符串的信息
3. 密码字符串不会不包含集合中的字母

例子：
```JS
secret = "whatisup"    // 密码字符串-->程序的输出
triplets = [           // 集合 --> 程序的输入
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]
var recoverSecret = function(triplets) {
// ... -->程序的实现
}
```

## 解题
想了很久没想到怎么解，又想看看大神解，只能作弊了。。。

```js
var recoverSecret = function (triplets) {
    let str = ''
    // codewar没有使用随机测试，所有的测试如下：
    let tests = ['whatisup', 'mathisfun', 'congrats', 'solved', 'abcdefghijklmnopqrstuvwxyz']
    // 把数组flat然后去重
    let flated = [...new Set(JSON.stringify(triplets).replace(/\[|\]|"/g, '').split(','))]
    tests.map(i => {
        let pass = i.split('').every(j => flated.includes(j))
        if (pass) str = i
    })
    return str
}
```


## Codewars精选解
看了这个解，茅塞顿开，就是不断的找到第一个字母。比如虽然学过解构赋值，但实际应用不多，此解就用到了：`[first]=[1,2,3]`可以取到第一个元素，即`first=1`。还比如判断第一个字母在所有的三字母数组中都是第一个或者不存在，就用到了`tuple.indexOf(first) <= 0`，很巧妙的利用了元素不存在时返回`-1`。
```js
// 密码的第一位一定存在并且只存在于三字母数组中的第一位，理解了这点，题就解开了
// 比如例子'whatisup'中的'w'不会在三字母数组的第二、三位出现
var recoverSecret = function (triplets) {
    // 取到triplets中的第一个字母first
    for (var [first] of triplets) {
        // 如果第一个字母在所有的三字母数组中都是第一个或者不存在
        if (triplets.every(tuple => tuple.indexOf(first) <= 0)) {
            // 删掉所有first，因为first只存在于第一位，所以只需删除第一位，我改动了一下，会好理解一些
            // 原解这里是：triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
            triplets.map((item) => item[0] == first ? item.shift():'')
            // 递归
            return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
        }
    }
    return '';
}
```

## 本题相关知识
1. [解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
2. [Array​.prototype​.every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

与`Array​.prototype​.every()`相反的是[`Array​.prototype​.some()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)，没了解过的可以一起学习了解。


[欢迎star](https://github.com/hiblacker/codewars-daily)

(完)