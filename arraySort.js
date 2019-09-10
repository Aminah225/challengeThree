function arraySort(anArray) {
    anArray = [2, 0, 6, 5, 1, 7, 'z', 'a'];
    var even = [];
    var odd = [];
    var char = [];
   
    for (i = 0; i < anArray.length; i++) {
        if (Number.isInteger(anArray[i])) {
            if (anArray[i] % 2 == 0) {
                even.push(anArray[i])
            }
            if (anArray[i] % 2 == 1) {
                odd.push(anArray[i])
            }
        }
        if (!Number.isInteger(anArray[i])) {
            char.push(anArray[i])
        }
    }
    return { evens: even.sort(), odds: odd.sort(), chars: char.sort() };
};
module.exports = arraySort; {
    console.log(arraySort([2, 0, 6, 5, 1, 7, 'z', 'a']));

}