function solve(arr) {
    const groupValuesByFrequency = arr.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = accumulator[currentValue] + 1 || 1;

        return accumulator;
    }, {});

    // Sort by the number of occurrences of the value (the "frequency") in descending order.  If the frequencies are
    // equal, then sort by value in ascending order.
    const sortedByFrequency = Object.entries(groupValuesByFrequency).sort((first, second) => {
        if (first[1] <  second[1]) return 1
        else if (first[1] > second[1]) return -1
        else { // if the frequencies are equal, sort in ascending order
            if (parseInt(first[0]) < parseInt(second[0])) return - 1
            else if (parseInt(first[0]) > parseInt(second[0])) return 1
            else return 0;
        }
    });

    return sortedByFrequency.reduce((accumulator, currentValue) => {
        for(let i = 0; i < currentValue[1]; i++) {
            accumulator.push(parseInt(currentValue[0]));
        }

        return accumulator;
    }, []);
}

console.log("----- Solve -----");
console.log("solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]: ", solve([2,3,5,3,7,9,5,3,7]));
console.log("solve([1,2,3,0,5,0,1,6,8,8,6,9,1]),[1,1,1,0,0,6,6,8,8,2,3,5,9]: ", solve([1,2,3,0,5,0,1,6,8,8,6,9,1]));
console.log("solve([5,9,6,9,6,5,9,9,4,4]),[9,9,9,9,4,4,5,5,6,6]: ", solve([5,9,6,9,6,5,9,9,4,4]));
console.log("solve([4,4,2,5,1,1,3,3,2,8]),[1,1,2,2,3,3,4,4,5,8]: ", solve([4,4,2,5,1,1,3,3,2,8]));
console.log("solve([4,9,5,0,7,3,8,4,9,0]),[0,0,4,4,9,9,3,5,7,8]: ", solve([4,9,5,0,7,3,8,4,9,0]));

function solve2(arr) {
    const frequencyMap = arr.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = accumulator[currentValue] + 1 || 1;

        return accumulator;
    }, {});

    return [...arr].sort((first, second) => { 
        if (frequencyMap[first] < frequencyMap[second]) return 1
        else if (frequencyMap[first] > frequencyMap[second]) return -1
        else {
            return first - second;
        }
    });
}

console.log("----- Solve2 -----");
console.log("solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]: ", solve2([2,3,5,3,7,9,5,3,7]));
console.log("solve([1,2,3,0,5,0,1,6,8,8,6,9,1]),[1,1,1,0,0,6,6,8,8,2,3,5,9]: ", solve2([1,2,3,0,5,0,1,6,8,8,6,9,1]));
console.log("solve([5,9,6,9,6,5,9,9,4,4]),[9,9,9,9,4,4,5,5,6,6]: ", solve2([5,9,6,9,6,5,9,9,4,4]));
console.log("solve([4,4,2,5,1,1,3,3,2,8]),[1,1,2,2,3,3,4,4,5,8]: ", solve2([4,4,2,5,1,1,3,3,2,8]));
console.log("solve([4,9,5,0,7,3,8,4,9,0]),[0,0,4,4,9,9,3,5,7,8]: ", solve2([4,9,5,0,7,3,8,4,9,0]));