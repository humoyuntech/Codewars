/**
 * Take an array and remove every second element from the array.
 * Always keep the first element and start removing with the next element.

 * Example:
 * ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
 * None of the arrays will be empty, so you don't have to worry about that!
 */


function removeEveryOther(arr){
    return arr.filter((item, index) => {
      return index % 2 === 0
    })
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
//======================================================================
/**
 * Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

console.log(removeExclamationMarks('Hello! Wor!ld!'));
