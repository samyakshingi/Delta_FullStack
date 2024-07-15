// Q1
let arr = [1, 2, 3, 4, 5, 6];
let n = 3;
let ans = arr.slice(0, n);
console.log("First N elements = ", ans);

//Q2
let brr = [1, 2, 3, 4, 5, 6];
let m = 3;
let bns = brr.slice(brr.length - n);
console.log("First N elements = ", bns);

//Q3
let str = prompt("Enter the string");

if (str.length == 0) {
  console.log("String is empty");
} else {
  console.log("String is not empty");
}

//Q4
let b = "HeLlo ThIs IS StrrrR";
let id = 7;
if (b[id] == b[id].toLocaleLowerCase()) {
  console.log("The character is lowercase");
} else {
  console.log("The character is uppercase");
}

//Q5
let c = "   HeLlo ThIs IS StrrrR    ";
let d = c.trim();
console.log(d);

//Q6
let nnn = [5, 6, 9, 7455, 847, 7, 4, "Hello", 58, 55, 855];
if (nnn.indexOf(7) != -1) {
  console.log("7 is present in the array at: ", nnn.indexOf(7));
} else {
  console.log("7 is not present in the array");
}
