const getHalfLength = require('./getHalfLength')

module.exports = array => {
    const halfLength = getHalfLength(array)

    const a = array.slice(0, halfLength)
    const b = array.slice(halfLength)

    return [
        a,
        b
    ]

}