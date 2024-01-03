# TypeScript Masterclass

[Installing & Compiling](#installing--compiling)

[Basic Types](#basic-types)

[Better Workflow with tsconfig](#better-workflow-with-tsconfig)

[Arrays & Object Literals](#arrays--object-literals)

[Functions](#functions)

[Any Type](#any-type)

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