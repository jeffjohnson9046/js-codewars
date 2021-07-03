var uniqueInOrder = function (iterable) {
    const iterableToArray = [...iterable];
    const result = [];

    iterableToArray.forEach((c) => {
        if (!result.some((x) => x === c) || result[result.length - 1] !== c) {
            result.push(c);
        }
    });

    return result;
};

var uniqeInOrderReduce = function (iterable) {
    return [...iterable].reduce((accumulator, currentValue) => {
        if (accumulator[accumulator.length - 1] !== currentValue) {
            accumulator.push(currentValue);
        }

        return accumulator;
    }, []);
};

console.log("----- uniqueInorder -----");
console.log("'AAAABBBCCDAABBB' should be ['A', 'B', 'C', 'D', 'A', 'B']: ", uniqueInOrder("AAAABBBCCDAABBB"));
console.log("'ABBCcAD' should be ['A', 'B', 'C', 'c', 'A', 'D']: ", uniqueInOrder("ABBCcAD"));
console.log("[1,2,2,3,3] should be [1,2,3]", uniqueInOrder([1, 2, 2, 3, 3]));

console.log("----- uniqeInOrderReduce -----");
console.log("'AAAABBBCCDAABBB' should be ['A', 'B', 'C', 'D', 'A', 'B']: ", uniqeInOrderReduce("AAAABBBCCDAABBB"));
console.log("'ABBCcAD' should be ['A', 'B', 'C', 'c', 'A', 'D']: ", uniqeInOrderReduce("ABBCcAD"));
console.log("[1,2,2,3,3] should be [1,2,3]", uniqeInOrderReduce([1, 2, 2, 3, 3]));