"use strict";
// 문자열 (string)
const a = '';
const b = "";
const c = ``; // 템플릿 리터럴
let myName = 'Charlie';
let message = `Hello, ${myName}`;
myName.toLocaleUpperCase();
message = 1234;
// 숫자 타입 (number)
let n = 100;
n = "100";
n.toUpperCase();
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
// 불리언 (boolean)
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we are open!");
}
if (!isCompleted) {
    console.log("job not completed");
}
// && || !
let isAvailable = isOpen && !isCompleted;
// null 널 타입
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("John");
logout();
// any 타입
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
