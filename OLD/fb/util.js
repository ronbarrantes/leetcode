const { performance } = require('perf_hooks')

const randomArray = (length, range = 100) => {
    let arr = []
    while(length>0){
        arr.push(Math.floor(Math.random() * range))
        length--
    }
    return arr
}

const displayList = list => {
    let str = ''
    while(list){
        str += list.next ? `${list.val} -> `: list.val
        list = list.next
    }
    console.log(str)
}

const performanceOf = (cb) => (tree) => {
    let t1 = performance.now()
    cb(tree)
    let t2 = performance.now()
    return t2-t1
}

const cheapDeepCopy = (obj) => JSON.parse(JSON.stringify(obj))

module.exports = {
    displayList,
    randomArray,
    performanceOf,
    deepCopy: cheapDeepCopy,
}
