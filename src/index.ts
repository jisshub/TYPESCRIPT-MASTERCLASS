console.log('hello world new world');

// array types
let names: string[] = ['hello', 'world', 'new', 'world'];

let ages: number[] = [1, 2, 3, 4, 5];

let mixed: (string | number)[] = ['hello', 1, 'world', 2];


// pushing new values into arrays

names.push('hello');
ages.push(6);
mixed.push(3, 'world');

// object literals

let user: {
    name: string,
    age: number,
    isAlive: boolean
} = {
    name: 'hello',
    age: 1,
    isAlive: true
}

user.name = 'world';
user.age = 2;
user.isAlive = false;

// type inference with object literals

let person = {
    name: 'anand',
    score: 10
}

person.name = 'justin';
person.score = 20;


// functions
function add(a: number, b: number): number {
    return a + b;
}

console.log('Result of Addition: ', add(1, 2));

function subtract(a: number, b: number): number {
    return a - b;
}

console.log('Result of Subtraction: ', subtract(1, 2));

function addAllNumbers(items: number[]): void {
    const total =  items.reduce((a, b) => a + b, 0);
    console.log('Total: ', total);
}

addAllNumbers([1, 2, 3, 4, 5]);

// return type inference
function formatGreeeting(name: string, greeting: string) {
    return `${greeting}, ${name}`;
}

const greeting = formatGreeeting('anand', 'hello');
console.log('Greeting: ', greeting);


// Any Type

let randomValue: any;

randomValue = 'hello';

randomValue = false;

randomValue = {
    name: 'anand',
    score: 10
}

console.log('Random Value: ', randomValue);

// any type in arrays

let names2: any[] = ['hello', 'world', 'new', 'world'];

names2.push('hello');

names2.push(1);

names2.push(true);

console.log('Names: ', names2);

// functions with any type

function addAny(a: any, b: any): any {
    return a + b;
}

console.log('Result of Addition: ', addAny(1, 2));

// tuples

let person2: [string, number, boolean] = ['hello', 1, true];

person2[0] = 'world';
person2[1] = 2;
person2[2] = false;

console.log('Person: ', person2);

// interfaces

interface Person {
    name: string,
    age: number,
    isAlive: boolean
}

let user2: Person = {
    name: 'hello',
    age: 1,
    isAlive: true
}

user2.name = 'world';
user2.age = 2;
user2.isAlive = false;

console.log('User: ', user2);

// type aliases

type Employee = {
    name: string,
    age: number,
    position: string,
    salary: number
}

let employee1: Employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    salary: 5000
}

console.log('Employee: ', employee1);


// union types

function displayData(data: string | number): void {
    console.log('Data:', data);
}

displayData('Hello'); // Output: Data: Hello
displayData(123); // Output: Data: 123


// type guards in typescript

function isNumber(x: any): x is number {
    return typeof x === "number";
}

let item: string | number = Math.random() < 0.5 ? "hello" : 123;

if (isNumber(item)) {
    console.log(item.toFixed(2)); // This line is error-free because TypeScript knows `item` is a number in this scope.
} else {
    console.log(item.toUpperCase()); // TypeScript knows `item` is a string in this scope.
}


// Interface


// Example - 1
interface hasName {
    name: string
}

const person3: hasName = {
    name: 'anand'
}

console.log('Person: ', person3);


// Example - 2

interface hasQuantity {
    quantity: number
}

const product: hasQuantity = {
    quantity: 10
}

function printQuantity(item: hasQuantity) {
    console.log('Quantity: ', item.quantity);
}

const fruit = {
    name: 'apple',
    quantity: 10
}

const vegetable = {
    name: 'potato',
    quantity: 20
}

printQuantity(fruit);
printQuantity(vegetable);


