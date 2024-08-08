/**
 * This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 * Это ката заключается в умножении заданного числа на восемь, если оно четное, и на девять в противном случае.
 */

// function simpleMultiplication(number) {

//     if(number % 2 === 0) {
//         return number * 8
//     } else {
//         return number * 9
//     }
// }

// console.log(simpleMultiplication(4));
// console.log(simpleMultiplication(3));

// ===============================================

function simpleMultiplication(number) {
    switch (number % 2) {
        case 0:
            return number * 8;
        default:
            return number * 9;
    }
}

console.log(simpleMultiplication(4));
console.log(simpleMultiplication(3));

