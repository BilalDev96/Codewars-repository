// 8 Kyu - Man in the West

/* A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false. */

function checkTheBucket(bucket){
    return bucket.includes('gold');
}

// 8 Kyu - Template Strings

/* Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '``` */

let TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
}