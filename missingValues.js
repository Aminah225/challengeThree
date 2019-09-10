function missingValue(array) {
    const miss = [];
  
    if (array.length <= 1) { return list }
    var i = 1, val = array[0] + 1;
    const count = ((array[array.length - 1]) - val) - (array.length - 2);
    while (miss.length < count) {
        while (array[i] !== val) { miss.push(val++) }
        i++;
        val++;
    }
    return miss;
}
module.exports = missingValue; {
    console.log(missingValue([1, 3, 4, 8, 10, 15]));
};