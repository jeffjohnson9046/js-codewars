const matrix = 
[
  [1,0,1,1,1],
  [0,1,1,0,1],
  [0,1,1,0,1],
  [0,1,1,0,1],
 ];

 const testInput = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
 ]

const testInput2 = [
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
];



function createHistogram(matrix) {
    const histogram = matrix.slice(0, 1);

    matrix.slice(1).forEach(row => {
        let previousRow = histogram[histogram.length - 1];
        const rowWithArea = [];

        row.forEach((cell, i) => {
            if (cell === 0) {
                rowWithArea.push(cell);
            } else {
                rowWithArea.push(cell + previousRow[i]);
            }            
        });

        histogram.push(rowWithArea);
    });

    return histogram;
}

function getMaxArea(c, row) {
    const result = [];
    let topVal = 0;
    let maxArea = 0;
    let area = 0;

    let i = 0;
    while (i < c) {
        if (!result || row[result[result.length - 1]] < row[i]) {
            result.push(i++);
        } else {
            topVal = row[result[result.length - 1]];
            result.pop();
            area = topVal * i;

            if (result) {
                area = topVal * (i - result[result.length - 1] - 1);
            }

            console.log("maxArea: ", maxArea);
            maxArea = Math.max(area, maxArea);
        }
    }

    while(result) {
        topVal = row[result[result.length - 1]];
        result.pop();
        area = topVal * i;
        
        if (result) {
            area = topVal * (i - result[result.length - 1] - 1);
        }

        maxArea = Math.max(area, maxArea);
    }

    return maxArea;
}

function largestRectangleInGrid(matrix) {
    let result = 0;
    const histogram = createHistogram(matrix);
    histogram.forEach(row => {
        row.forEach(() => {
            result = Math.max(result, getMaxArea(row.length, row));
        });
    });

    return result;
}

console.log('---- codewars problem ----');
largestRectangleInGrid(matrix); 

console.log('---- test from website ----');
largestRectangleInGrid(testInput2); 