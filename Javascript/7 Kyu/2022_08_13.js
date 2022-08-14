// 7 Kyu - Filter Long Words

/* Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps'] */

function filterLongWords(sentence, n) {
    let array = sentence.split(" ")
    return array.filter(x => x.length > n).map(x => String(x))
}