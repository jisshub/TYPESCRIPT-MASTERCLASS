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
