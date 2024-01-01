# TypeScript Masterclass

[Installing & Compiling](#installing--compiling)
[Basic Types](#basic-types)

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