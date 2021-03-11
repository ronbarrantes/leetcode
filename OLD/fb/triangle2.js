var getRow = function(rowIndex) {
    let row = []

    const fillRow = (i) => {
        if(i<=0 || i>=row.length) // || i >= row.length-1)// || i===row.length)
            return 1

        else if(row.length >= 3){
            let temp1 = row[i-1]
            let temp2 = row[i]
            return temp1+temp2
        }
    }

    const buildRow = i => {
        if (row.length > rowIndex)
            return

        let num = fillRow(i)
        row.push(num)
        console.log(row)
        buildRow(++i)
    }

    buildRow(0)
    return row
}

console.log(getRow(6))