// long 1
var words = ["hello", "what", "is", "up", "dude"];

function lengths(arrayOfStrings) {
  var myArr = [];
  for (i = 0; i < arrayOfStrings.length; i++) {
    myArr.push(arrayOfStrings[i].length);
    console.log(myArr);
    return (myArr);
  }
}
lengths(words);

// long 2

function transmogrifier(x, y, z) {
  var message = Math.pow((x * y), z);
  console.log(message);
  return message;
}

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

// long 3
var empty = [];


function wordreverse(ourInput) {
  var sentence = ourInput;
  empty = sentence.split(" ").reverse().join(" ");
  console.log(empty);
  return empty;
}


wordreverse("Now I know what a TV dinner feels like");


// short 1

function max(a, b) {
  var first = a;
  var second = b;
  if (first > second) {
    return a;
  } else {
    return b;
  }
}
max(10, 5)

//short 2

function maxOfThree(num1, num2, num3) {
  var max = Math.max(num1, num2, num3);
  return max;
}

maxOfThree(19, 2, 15)


//short 3

var vowels = ["a", "e", "i", "o", "u"];

function isCharacterAVowel(str) {
   for( i = 0; i < vowels.length; i++){
    if(str === vowels[i]){
       return true;
       //console.log(true);
          }
     else {
       return false;
       //console.log(false);
          }
}
};

isCharacterAVowel("f");


//short 4
//Define a function sumArray and a function multiplyArray
//that sums and multiplies (respectively) all the numbers
//in an array of numbers. For example, sumArray([1,2,3,4])
//should return 10, and multiplyArray([1,2,3,4]) should
//return 24.

function sumArray(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
// Print out the total to the console
console.log(sumArray([1, 2, 3, 4]));


function multiplyArray(numbers) {
  var multiply = 1;
  for (var j = 0; j < numbers.length; j++) {
    multiply *= numbers[j];

  }
  return multiply;

}

console.log(multiplyArray([1, 2, 3, 4]));


//short 5


// short 6

function reverseString(str) {
  var str = str.split("").reverse().join("");

  return str;
}

reverseString("jag testar");


// short 7

function findLongestWord(str) {
  var array = str.split(" ");
  var maxLength = array[0].length;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) maxLength = array[i].length
  }
  return maxLength;
  //console.log(maxLength);
}

findLongestWord("What if we try a super-long word");


// short 8

function filterLongWords(array, int) {
var length = array.length;
  var longestWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > int) {
      longestWords[longestWords.length] = array[i];
    }
  }
  return longestWords;
  //console.log(longestWords);

}

filterLongWords(["string","my","pants"], 5);
