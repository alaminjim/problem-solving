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

function countVowels(value: string): number {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < value.length; i++) {
    if (vowels.includes(value[i]!)) {
      count++;
    }
  }

  return count;
}

function factorial(value: number): number {
  let result = 1;

  for (let i = 1; i <= value; i++) {
    result *= i;
  }

  return result;
}

function getEvenNumbers(evenNum: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < evenNum.length; i++) {
    if (evenNum[i]! && evenNum[i]! % 2 === 0) {
      result.push(evenNum[i]!);
    }
  }

  return result;
}

function fibonacci(value: number): number[] {
  if (value === 1) return [0];

  let result = [0, 1];

  for (let i = 2; i < value; i++) {
    let next = result[i - 1]! + result[i - 2]!;
    result.push(next);
  }

  return result;
}

function findMin(findNum: number[]): number {
  let min = findNum[0];

  for (let i = 1; i < findNum.length; i++) {
    if (findNum[i]! < min!) {
      min = findNum[i];
    }
  }

  return min!;
}
