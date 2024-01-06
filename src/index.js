console.log('hello world new world');
// array types
var names = ['hello', 'world', 'new', 'world'];
var ages = [1, 2, 3, 4, 5];
var mixed = ['hello', 1, 'world', 2];
// pushing new values into arrays
names.push('hello');
ages.push(6);
mixed.push(3, 'world');
// object literals
var user = {
    name: 'hello',
    age: 1,
    isAlive: true
};
user.name = 'world';
user.age = 2;
user.isAlive = false;
// type inference with object literals
var person = {
    name: 'anand',
    score: 10
};
person.name = 'justin';
person.score = 20;
// functions
function add(a, b) {
    return a + b;
}
console.log('Result of Addition: ', add(1, 2));
function subtract(a, b) {
    return a - b;
}
console.log('Result of Subtraction: ', subtract(1, 2));
function addAllNumbers(items) {
    var total = items.reduce(function (a, b) { return a + b; }, 0);
    console.log('Total: ', total);
}
addAllNumbers([1, 2, 3, 4, 5]);
// return type inference
function formatGreeeting(name, greeting) {
    return "".concat(greeting, ", ").concat(name);
}
var greeting = formatGreeeting('anand', 'hello');
console.log('Greeting: ', greeting);
// Any Type
var randomValue;
randomValue = 'hello';
randomValue = false;
randomValue = {
    name: 'anand',
    score: 10
};
console.log('Random Value: ', randomValue);
// any type in arrays
var names2 = ['hello', 'world', 'new', 'world'];
names2.push('hello');
names2.push(1);
names2.push(true);
console.log('Names: ', names2);
// functions with any type
function addAny(a, b) {
    return a + b;
}
console.log('Result of Addition: ', addAny(1, 2));
// tuples
var person2 = ['hello', 1, true];
person2[0] = 'world';
person2[1] = 2;
person2[2] = false;
console.log('Person: ', person2);
var user2 = {
    name: 'hello',
    age: 1,
    isAlive: true
};
user2.name = 'world';
user2.age = 2;
user2.isAlive = false;
console.log('User: ', user2);
var employee1 = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    salary: 5000
};
console.log('Employee: ', employee1);
// union types
function displayData(data) {
    console.log('Data:', data);
}
displayData('Hello'); // Output: Data: Hello
displayData(123); // Output: Data: 123
