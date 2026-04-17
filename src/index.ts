function reverseStringValue(value: string) {
  const reverseValue = value.split("").reverse().join("");

  return reverseValue;
}

function fizzBuzz(n: number) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function largestNumberOfArray(arrayNum: number[]) {
  let maxNumber: number = arrayNum[0]!;

  for (let i = 1; i < arrayNum.length; i++) {
    if (arrayNum[i]! > maxNumber) {
      maxNumber = arrayNum[i]!;
    }
  }
  return maxNumber;
}

function isPalindromeValue(value: string) {
  const palindrome = value.split("").reverse().join("");

  const checkValue = value === palindrome;

  return checkValue;
}

function arrayOfSum(sumArray: number[]) {
  let sum = 0;

  for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i]!;
  }

  return sum;
}
