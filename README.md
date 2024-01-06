# TypeScript Masterclass

[Installing & Compiling](#installing--compiling)

[Basic Types](#basic-types)

[Better Workflow with tsconfig](#better-workflow-with-tsconfig)

[Arrays & Object Literals](#arrays--object-literals)

[Functions](#functions)

[Any Type](#any-type)

[Tuples](#tuples)

[Interfaces](#interfaces)

[Type Aliases](#type-aliases)

[Union Types](#union-types)

![](./images/Screenshot%202023-12-31%20120217.png)

## Installing & Compiling

```bash
npm install -g typescript
```

Compiling typescript file into javascript

```bash
tsc index.ts
```

Above command will compile the typescript file and create a javscript file in the same directory.

Then we run the javascript file which is created.

```bash
node index.js
```


## Basic Types

### number, string and beoolean types

```ts
let age: number = 30;   
let firstName: string = 'John';
let isPresent: boolean = true;

console.log(age);

age = 80;
firstName = 'Jane';
isPresent = false;

console.log(age);
console.log(firstName);
console.log(isPresent);
```

### null and undefined types

```ts
let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);

```

## Better Workflow with tsconfig

- Create tsconfig.json file in the root of the project directory using below command:

```bash
tsc --init
```

- Use watch flag to automatically find the changes in the ts file and make updates based on that in js file.
- It watches our typescript files and every time we make a change and save the file, it will re-run the compiler and code is updated.

```bash
tsc --watch ./src/index.ts
```

- Ask node to watch changes happening in index.js file. We use watch flag for same.

```bash
node --watch ./dist/index.js
```node --watch ./dist/index.js

- It watches for the changes in javascript file and run the compiler everytime some change happens.


## Arrays & Object Literals


```ts

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
```

## Functions

https://netninja.dev/courses/typescript-masterclass/lectures/50286074


```ts
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
```

## Any Type

- Any type is useful when migrating from javascript to typescript.

- It allows us to use any type in our code.

- Any type wont cause any problems in our code.


```ts
let notSure: any = 4;
notSure = 'hello';
notSure = true;
```


```ts

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
```

## Tuples

```ts
let person2: [string, number, boolean] = ['hello', 1, true];

person2[0] = 'world';
person2[1] = 2;
person2[2] = false;

console.log('Person: ', person2);
```

### Explanation 

In TypeScript, a tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same. This is different from a regular array where all elements are of the same type.

In your code, `person2` is a tuple that is expected to have three elements. The first element is a string, the second is a number, and the third is a boolean. 

Here's a breakdown:

- `let person2:` This is declaring a variable named `person2`. The `let` keyword allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used. This is different from the `var` keyword, which defines a variable globally or locally to an entire function regardless of block scope.

- `[string, number, boolean]` This is the type annotation for the `person2` variable. It's saying that `person2` is a tuple where the first element is a string, the second element is a number, and the third element is a boolean.

- `= ['hello', 1, true];` This is assigning an initial value to the `person2` tuple. The string 'hello' is the first element, the number 1 is the second element, and `true` is the third element.

## Interfaces

```typescript
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
```

### Explanation

First, an interface `Person` is defined. In TypeScript, an interface is a way to define a contract on a function or object to have a particular structure. The `Person` interface specifies that any object assigned to a variable of type `Person` must have three properties: `name` of type `string`, `age` of type `number`, and `isAlive` of type `boolean`.

Next, a variable `user2` of type `Person` is declared and initialized with an object. The object has properties `name`, `age`, and `isAlive` with values 'hello', 1, and true respectively. This object matches the structure defined by the `Person` interface, so it's a valid value for the `user2` variable.

Then, the properties of `user2` are updated. The `name` property is updated to 'world', the `age` property is updated to 2, and the `isAlive` property is updated to false.

## Type Aliases

```ts
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
```

### Explanation

In TypeScript, a type alias is a way to give a name to a type. It doesn't create a new type - it creates a new name to refer to that type. The Employee type is an object type with four properties: name of type string, age of type number, position of type string, and salary of type number.

Next, a variable employee1 of type Employee is declared and initialized with an object. The object has properties name, age, position, and salary with values 'John Doe', 30, 'Software Engineer', and 5000 respectively. This object matches the structure defined by the Employee type, so it's a valid value for the employee1 variable.

Finally, the employee1 variable is logged to the console with a preceding string 'Employee: '. This will print something like Employee: { name: 'John Doe', age: 30, position: 'Software Engineer', salary: 5000 } to the console.

## Union Types

```ts
function displayData(data: string | number): void {
    console.log('Data:', data);
}

displayData('Hello'); // Output: Data: Hello
displayData(123); // Output: Data: 123
```

### Explanation

A union type is a type formed from two or more other types, representing values that may be any one of those types. We use the vertical bar (|) to separate each type, so number | string means a value that can be either a number or a string.

In the code, a function named displayData is declared. This function takes one argument data that can be either a string or a number, as indicated by the union type string | number. The void keyword indicates that this function does not return a value.

Finally, the displayData function is called twice with different types of arguments - once with a string 'Hello' and once with a number 123. Both of these calls are valid because data is declared as a union type string | number.

## Type Guards

https://netninja.dev/courses/typescript-masterclass/lectures/50286067
