// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);


var divide = function(number1, number2) {
  return (number1/(number2*number2));
};

var number1 = parseInt(prompt("Enter Weight (in lb):"));
var number2 = parseInt(prompt("Enter Height (in inches):"));
var result1 = divide(number1, number2);

var result2 = result1*703
alert(result2);
