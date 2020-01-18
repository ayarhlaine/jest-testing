const sum = (values) => {
    let total = 0;
    values.map(value => {
        total += value;
    })
    return total;
}
const positive = (values) => {
    return values.filter(value => {
        return value > 0;
    })
}
const negative = (values) => {
    return values.filter(value => {
        return value < 0;
    })
}

module.exports ={sum,positive,negative}