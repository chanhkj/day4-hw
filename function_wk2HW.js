// long 1
var words = ["hello", "what", "is", "up", "dude"];

function lengths(arrayOfStrings) {
  var myArr = [];
  arrayOfStrings.forEach(function(string) {
    myArr.push(string.length);


  })
   return(myArr);
};
  console.log(lengths(words));

// function lengths(arrayOfStrings) {
//   var myArr = [];
//   for (i = 0; i < arrayOfStrings.length; i++) {
//     myArr.push(arrayOfStrings[i].length);
//     // console.log(myArr);
//     return (myArr);
//   }
// }
// console.log(lengths(words));
//
// lengths(words);




//short 4
//Define a function sumArray and a function multiplyArray
//that sums and multiplies (respectively) all the numbers
//in an array of numbers. For example, sumArray([1,2,3,4])
//should return 10, and multiplyArray([1,2,3,4]) should
//return 24.

var sumArr = [1, 2, 3, 4];
var add = function (x, y) {
  return x + y;

};


var sum = sumArr.reduce(add);
console.log(sum);

// function sumArray(numbers) {
//   var total = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }
// // Print out the total to the console
// console.log(sumArray([1, 2, 3, 4]));

var multiArr = [1, 2, 3, 4];
var product = function (x, y) {
  return x * y;

};


var multiply = multiArr.reduce(product);
console.log(multiply);

// function multiplyArray(numbers) {
//   var multiply = 1;
//   for (var j = 0; j < numbers.length; j++) {
//     multiply *= numbers[j];
//   }
//   return multiply;
// }
//
// console.log(multiplyArray([1, 2, 3, 4]));


// short 7

var strArr = ["hellow", "earth", "this", "is", "alien_1"];

var longestWord = strArr.reduce (function (x, y) {
//   console.log('x is ' + x);
//   console.log('y is ' + y);

  if (x.length > y.length) {
    return x
  }
  else {
    return y
  }

return longestWord;
});

console.log(longestWord);


// function findLongestWord(str) {
//   var array = str.split(" ");
//   var maxLength = array[0].length;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].length > maxLength) maxLength = array[i].length
//   }
//   return maxLength;
//   //console.log(maxLength);
// }
//
// findLongestWord("What if we try a super-long word");


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
