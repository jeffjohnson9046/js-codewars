function duplicateCount(text) {
    const seen = [];
    const counts = [];

    text.split("").forEach((c) => {
        if (seen.some((x) => x === c.toLowerCase()) && !counts.some((x) => x === c.toLowerCase())) {
            counts.push(c);
        } else {
            seen.push(c.toLowerCase());
        }
    });

    return counts.length;
}

function duplicateCountRegex(text) {
    const duplicateCharacterGroups = text
        .toLowerCase()
        .split("")
        .sort()
        .join("")
        .match(/(.)\1+/g);

    return (duplicateCharacterGroups || []).length;
}

console.log("----- duplicateCount ------");
console.log("abcde should return 0: ", duplicateCount("abcde"));
console.log("aabbcde should return 2: ", duplicateCount("aabbcde"));
console.log("aabBcde should return 2: ", duplicateCount("aabBcde"));
console.log("indivisibility should return 1: ", duplicateCount("indivisibility"));
console.log("Indivisibilities should return 2: ", duplicateCount("Indivisibilities"));
console.log("aA11 should return 2: ", duplicateCount("aA11"));
console.log("ABBA should return 2: ", duplicateCount("ABBA"));

console.log("----- duplicateCountRegex ------");
console.log("abcde should return 0: ", duplicateCountRegex("abcde"));
console.log("aabbcde should return 2: ", duplicateCountRegex("aabbcde"));
console.log("aabBcde should return 2: ", duplicateCountRegex("aabBcde"));
console.log("indivisibility should return 1: ", duplicateCountRegex("indivisibility"));
console.log("Indivisibilities should return 2: ", duplicateCountRegex("Indivisibilities"));
console.log("aA11 should return 2: ", duplicateCountRegex("aA11"));
console.log("ABBA should return 2: ", duplicateCountRegex("ABBA"));
