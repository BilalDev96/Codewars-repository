// 7 Kyu - Remove Anchor From URL

/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

function removeUrlAnchor(url){
    if(!url.split("").includes("#")) { // if the string doesn't contain the anchor, then return the url string in full
      return url;
    }else{
      return url.split("").slice(0,url.indexOf('#')).join(""); // otherwise, slice anything from the anchor onwards and return the string
    }
}

// 7 Kyu - Sum of Angles

/* Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2. */

function angle(n) {
    return ( n - 2 ) * 180;
}

// 7 Kyu - Max Diff

/* You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7 */

function maxDiff(list) {
    return list.length === 0 || list.length === 1 ? 0 : Math.max(...list) - Math.min(...list); // using length method to determine whether list array has 1 or 0 elements, and to return 0 in that case. Otherwise, use Math.max and Math.min to find the greatest/smallest numbers in the array and find the difference
};