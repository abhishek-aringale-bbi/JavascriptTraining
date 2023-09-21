/*
Write a JavaScript function called stringManipulation that takes a string as an input and performs the following operations:

Reverse the string.
Capitalize the first letter of the reversed string.
Count the number of vowels (a, e, i, o, u) in the original string.
Check if the original string is a palindrome (reads the same forwards and backward).
Replace all occurrences of the letter 'a' with 'X' in the original string.

Your function should return an object with the following properties:

reversed: The reversed and capitalized string.
vowelCount: The count of vowels in the original string.
isPalindrome: A boolean indicating whether the original string is a palindrome.
replacedString: The original string with 'a' replaced by 'X'.

For example, if the input is "level," the function should return:

{   reversed: "LeveL",   vowelCount: 2,   isPalindrome: true,   replacedString: "level"}
*/

class stringManipulation {
  obj = {};
  constructor(string) {
    this.string = string;
    this.Xprint();
  }
  reverse(string) {
    return string.split("").reverse().join("");
  }

  vowelCount(string) {
    let arr = ["a", "e", "i", "o", "u"];
    let arr2 = [];
    for (let i = 0; i < string.length; i++) {
      arr2.push(string[i]);
    }
    // console.log(arr2);
    let ct = 0;
    for (let i = 0; i < arr2.length; i++) {
      //   console.log(string);
      if (arr.includes(arr2[i])) {
        // console.log(arr[i]);
        ct++;
      }
    }
    return ct;
  }

  isPalindrome(string) {
    let l = 0,
      r = string.length - 1;

    let flag = 0;
    while (l <= r) {
      if (string[l] === string[r]) {
        l++;
        r--;
      } else {
        flag = 1;
        break;
      }
    }
    // console.log(flag);
    if (flag) return false;
    else return true;
  }

  replacedString(string) {
    let s = string.replaceAll("a", "X");
    return s;
  }

  Xprint() {
    let replace = this.replacedString(this.string);
    let reverse = this.reverse(this.string);
    let vowelCount = this.vowelCount(this.string);
    let isPalindrom = this.isPalindrome(this.string);
    // console.log(reverse);
    let obj = {};
    obj.reversed = reverse;
    obj.vowelCount = vowelCount;
    obj.replace = replace;
    obj.isPalindrom = isPalindrom;

    // obj = {
    //   reversed: reverse,
    //   vowelCount: vowelCount,
    //   replace: replace,
    // };
    console.log(obj);
  }
}

const x = new stringManipulation("levelq");
// console.log(x.reverse("levelq"));
// console.log(x.replacedString("levelqaa"));
// console.log(x.vowelCount("levelqaa"));
// console.log(x.isPalindrome("levelqaa"));
