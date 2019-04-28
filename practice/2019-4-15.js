// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

//  1,1 1,2 - 1,n 
//  2,1 2,2 - 2,n
//  ···       ···
//  n,1 n,2 - n,n



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
        if(!copyArr[0]) copyArr[0]=[]
        if (copyArr[0].length > 0) circle(copyArr)

    }
    return newArr
}

let arr = snail([
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [4, 5, 6, 7],
    [7, 8, 9, 0]])
console.log(JSON.stringify(arr, null, 2));
