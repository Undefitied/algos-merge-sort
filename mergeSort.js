const fs = require('fs')
const getArrayOfHalfs = require('./utils/getArrayOfHalfs')

fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const input = data.split('\r\n').map(s => parseInt(s, 10))

    const result = mergeSort(input)
    console.log('result', result)
})

const mergeSort = inputArray => {
    if (inputArray.length === 1) {
        return inputArray
    }

    const [leftHalf, rightHalf] = getArrayOfHalfs(inputArray)

    const sortedLeftHalf = mergeSort(leftHalf)
    const sortedRightHalf = mergeSort(rightHalf)

    const mergedHalfs = []

    let i = 0
    let j = 0
    for (let k = 0; k < inputArray.length; k++) {
        if (sortedLeftHalf[i] < sortedRightHalf[j] || !sortedRightHalf[j]) {
            mergedHalfs[k] = sortedLeftHalf[i]
            i++
        } else {
            mergedHalfs[k] = sortedRightHalf[j]
            j++
        }
    }

    return mergedHalfs
}