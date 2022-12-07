// 7 Kyu - Help Suzuki Rake His Garden!

/* Rake out any items that are not a rock or gravel and replace them with gravel such that:

garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
Returns a string with all items except a rock or gravel replaced with gravel:

garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel' */

function rakeGarden(garden) {
    let array = garden.split(" ").map(x => x != "rock" ? x = "gravel" : x)
    return array.join(" ")
}