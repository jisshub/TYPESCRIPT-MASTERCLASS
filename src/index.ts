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