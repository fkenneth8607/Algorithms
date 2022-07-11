
console.log(getLength([1, [2, 3]]));

console.log(getLength([1, [2, [3, 4]]]));

console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

console.log(getLength([1, [2], 1, [2], 1]));


function getLength(a){
  let count = 0;
    for (const value of a) {
        if (Array.isArray(value)) {
            // Recurse
            count += getLength(value);
        } else {
            // Count
            ++count;
        }
    }
    return count;
}