// 6 Kyu - Who Likes It?

/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases. */

function likes(names) { // names.length signifies how many values the array contains to evaluate which string value shall be used
    if(names.length == 0) { 
      return 'no one likes this'; // if array is empty, return string value
    }else if(names.length == 1) {
      return `${names} likes this`; // if array only contains 1 value, return string value
    }else if(names.length == 2) {
      return `${names[0]} and ${names[1]} like this`; // if array contains 2 values, return string value
    }else if(names.length == 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`; // if array contains 3 values, return string value
    }else {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; // in all other cases, return this string value
    }
}