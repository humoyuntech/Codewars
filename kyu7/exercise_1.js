/**
     Your task is to make two functions ( max and min, or maximum and minimum, etc., 
     depending on the language ) that receive a list of integers as input, and return 
     the largest and lowest number in that list, respectively.

    Examples (Input -> Output)
    * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
    * [-52, 56, 30, 29, -54, 0, -110] -> max = 56, min = -110, 
    * [42, 54, 65, 87, 0]             -> max = 87, min = 0
    * [5]

 */


let min = function(list){
    return Math.min(...list)
}


let max = function(list){ 
    return Math.max(...list);
}

console.log('max =>',max([4,6,2,1,9,63,-134,566]),  'min =>', min([4,6,2,1,9,63,-134,566]));
console.log('max =>',max([-52, 56, 30, 29, -54, 0, -110]),  'min =>', min([-52, 56, 30, 29, -54, 0, -110]));
console.log('max =>',max([42, 54, 65, 87, 0]),  'min =>', min([42, 54, 65, 87, 0]));
console.log('max =>',max([5]),  'min =>', min([5]));

