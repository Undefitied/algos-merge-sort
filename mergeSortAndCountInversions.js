const fs = require('fs')
const getArrayOfHalfs = require('./utils/getArrayOfHalfs')
const mergeSort = require('./utils/mergeSort')

fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const input = data.split('\r\n').map(s => parseInt(s, 10))
    console.log(input)

    const inputDebug = [1, 3, 5, 2, 4, 6]
    const result = sortedCount(inputDebug)
    console.log('result', result)

    const resultSorted = sorted(input)
    //console.log('inputSorted', input)
    console.log('resultSorted', resultSorted)
})

// level for debugging
let level = 1;
const mergeSortAndCountInversions = (A) => {
    console.log('level', level)
    level++

    const n = A.length

    if (n === 1) {
        return [A, 0]
    }

    const [leftHalf, rightHalf] = getArrayOfHalfs(A)

    const [B, x] = mergeSortAndCountInversions(leftHalf)
    const [C, y] = mergeSortAndCountInversions(rightHalf)
    const [D, z] = mergeWithSortAndCountSplitInversions(B, C)

    return [mergeSort(A), x+y+z]
}

const mergeWithSortAndCountSplitInversions = (B, C) => {
    // B and C are results of mergeSort()
    const n = B.length + C.length

    const D = []
    let inversions = 0;
    let i = 0
    let j = 0

    for (let k = 0; k < n; k++) {
        if (B[i] < C[j] || !C[j]) {
            D[k] = B[i]
            i++
        } else {
            D[k] = C[j]
            j++
            inversions += B.length - i
        }
    }

    return [D, inversions]
}





