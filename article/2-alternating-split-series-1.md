# Codewars刷题升级2 - 【加密解密字符串（一）】- 6sku - Alternating Split
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

译：生成加密字符串：从字符串中取出第2n个字符，然后取出余下的第2n个字符，将他们拼成新字符串。这样做n次。

例:

```
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
```

Write two methods:
```js
function encrypt(text, n)
function decrypt(encryptedText, n)
```
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

## 问题拆解
加密就是根据传入的 `n` 相隔`f(n)`依次取出字符组成新字符串
解密就是将新字符串相隔`f(n)`放回原字符串
1. 加密

    - 将字符串转换成数组方便处理
    - 循环取出当前数组第 `x` 个字符放入新数组，`x` 根据题意取 `2` 的 `n` 次方再乘以 `k`，`k` 为第 `k` 次循环
    - 合并字符串

2. 解密

    - 新建一个等于字符串长度的数组（原字符串数组）
    - 循环新数组，依次将字符放回原字符串的 `f(n) * k` 处
    - 返回原字符串

## 解题
额，抱歉，我的有点长
```js
function encrypt(text, n) {
  return n <= 0 || !text ? text : text.split('').map((i, k) => text.split('').splice((Math.pow(2, n) * (k + 1) - 1) % (text.length % 2 == 0 ? text.length + 1 : text.length), 1)[0]).join('')
}

function decrypt(encryptedText, n) {
  if(!encryptedText || n <= 0) return encryptedText
  let arr = new Array(encryptedText.length)
  encryptedText.split('').map((i,k) => arr[(Math.pow(2,n) * (k+1)-1) % (encryptedText.length % 2 == 0 ? encryptedText.length + 1 : encryptedText.length)] = i)
  return arr.join('')
}
```



## Codewars精选解
成功提交自己的答案后，可以浏览大神解。

- 最佳实践：

```js
function encrypt(text, n) {
  if (!text || n <= 0) return text; 
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}
```


- 再看看最骚解：

```js
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}
```
理解这个解需要一定的正则知识，`/.(.|$)/g`

## 本题相关知识
1. 

[欢迎star](https://github.com/hiblacker/codewars-daily)

(完)