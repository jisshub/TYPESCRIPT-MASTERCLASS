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


