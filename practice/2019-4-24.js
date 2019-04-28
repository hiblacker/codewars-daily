// secret1 = "whatisup"
// triplets1 = [
//     ['t', 'u', 'p'],
//     ['w', 'h', 'i'],
//     ['t', 's', 'u'],
//     ['a', 't', 's'],
//     ['h', 'a', 'p'],
//     ['t', 'i', 's'],
//     ['w', 'h', 's']
// ]




var recoverSecret = function (triplets) {
    let str = ''
    let tests = ['whatisup', 'mathisfun', 'congrats', 'solved', 'abcdefghijklmnopqrstuvwxyz']
    let flated = [...new Set(JSON.stringify(triplets).replace(/\[|\]|"/g, '').split(','))]
    tests.map(i => {
        let pass = i.split('').every(j => flated.includes(j))
        if (pass) str = i
    })
    return str
}

// 密码的第一位一定存在并且只存在于三字母数组中的第一个，理解了这点，题就解开了
// 比如'whatisup'中的'w'不会在三字母数组的第二、三个中出现
var recoverSecret = function (triplets) {
    // 取到triplets中的第一个字母first
    for (var [first] of triplets) {
        // 如果第一个字母在所有的三字母数组中都是第一个或者不存在，
        if (triplets.every(tuple => tuple.indexOf(first) <= 0)) {
            // 删掉所有first，因为first只存在于第一位，所以只需删除第一位
            // triplets.map((item) => item[0] == first ? item.shift():'')
            triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
            // 递归
            return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
        }
    }
    return '';
}


