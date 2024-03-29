// 7 Kyu - Case Swapping

/* Given a string, swap the case for each of the letters.

Examples
""           -->   ""
"CodeWars"   -->   "cODEwARS"
"abc"        -->   "ABC"
"ABC"        -->   "abc"
"123235"     -->   "123235" */

function swap(str){
    let array = str.split("").map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
    return array.join("")
}