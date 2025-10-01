// 문자열 (string)

const a: string = ''
const b: string = ""
const c: string = `` // 템플릿 리터럴

let myName: string = 'Charlie';
let message: string = `Hello, ${myName}`; 

myName.toLocaleUpperCase()

message = 1234

// 숫자 타입 (number)

let n: number = 100;

n = "100"
n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// 불리언 (boolean)

let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen) {
    console.log("hello we are open!");
}

if(!isCompleted) {
    console.log("job not completed");
}

// && || !

let isAvailable: boolean = isOpen && !isCompleted;

// null 널 타입

let user: string | null = null;

function login(userName: string) {
    user = userName;
}

function logout() {
    user = null;
}

login("John")
logout()

// any 타입

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
