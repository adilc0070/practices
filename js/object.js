function groupAnagrams(arr) {
    const grouped = {};
    arr.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (!grouped[sortedWord]) {
            grouped[sortedWord] = [];
        }
        grouped[sortedWord].push(word);
    });
    const result = Object.values(grouped);
    return result;
}

const arr = ["ate", "eat", "tea", "bat", "tab", "cat",
"dog", "god", "act", "tac", "car", "arc",
"listen", "silent", "enlist", "inlets", "tinsel",
"cinema", "iceman", "manic",];
const nestedArray = groupAnagrams(arr);

console.log(nestedArray);
