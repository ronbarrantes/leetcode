const width = process.argv[2] || 16
const height = process.argv[3] || 9

const factor = (num) => {
    const array = new Array()
    let currFactor = 2

    while(currFactor <= num){
        if(num%currFactor === 0){
            array.push(currFactor)
            num /= currFactor
        }
        else currFactor += 1
    }
    return array
}

const compareFactors = (w, h) => {
    let wp = 0
    let hp = 0
    const multiplyReduce = [((a, b) => a * b), 1]

    while(wp < w.length && hp < h.length){
        console.log('-->', w, h)
        if (w[wp] < h[hp])
            wp++
        else if (h[hp] < w[wp])
            hp++
        else {
            w.splice(wp, 1)
            h.splice(hp, 1)
        }
    }
    w = w.reduce(...multiplyReduce)
    h = h.reduce(...multiplyReduce)

    return [w, h]
}

const getRatio = (w, h) => {
    const wFactored = factor(w)
    const hFactored = factor(h)
    return compareFactors(wFactored, hFactored)

}

module.exports = getRatio

console.log(getRatio(width, height))
