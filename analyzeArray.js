function analyzeArray(arr) {
    const arrSorted = arr.slice().sort((a, b) => a - b);
    const length = arr.length;
    const average = arr.reduce((sum, num) => sum + num, 0) / length;

    return {
        average,
        length,
        min: arrSorted[0],
        max: arrSorted[arrSorted.length - 1],
    };
}

module.exports = analyzeArray;