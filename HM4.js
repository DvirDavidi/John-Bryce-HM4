//TODO: Excellent job,Dvir!! Please see my (very minor) comments

// The number 10 will be printed 10 times.
const callbacks = [];
for (var i = 0; i < 10; i++) {
    callbacks.push(() => console.log(i));       // callbacks = [console.log(i), console.log(i), console.log(i),... * 10].
}
for (var x = 0; x < callbacks.length; x++) {    // i = 10.
    callbacks[x]();                             //  console.log(10),console.log(10),console.log(10),console.log(10)... * 10
}


// Q2
// Function that accepts a number as an argument and returns a new function that 
// accepts a number as an argument and returns their sum.
function makeAdd(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

const addTwo = makeAdd(2);
console.log(addTwo(3)); // -> 5

const addTen = makeAdd(10);
console.log(addTen(30)); // -> 40


//Q3
// Function that accepts another function as an argument and returns a new version of the function
function callOnce(func) {
    let ifCalled = false;
    return function () {
        if (!ifCalled) {
            ifCalled = true;
            result = func(...arguments); //TODO: In what scope is result? Can we access it from(for example) line 39?
        }
        return result;
    }
}

let tryCallOnce = callOnce(i => i * i);
console.log(tryCallOnce(5));
console.log(tryCallOnce(10));
console.log(tryCallOnce(20));


// Q4 
// A constructor for defining new Person.
function Person(name) {
    this.name = name;
}
Person.prototype.hello = function () {
    return 'hello ' + this.name;
}

// A constructor for defining new Developer.
function Developer(name, title) {
    Person.call(this, name);
    this.title = title;
}

// Creates an object that has the specified prototype (Person) and copy to Developer. 
Developer.prototype = Object.create(Person.prototype);

// Adds a property to Developer.
Object.defineProperty(Developer.prototype, "constructor", {
    value: Developer,
    enumerable: false,
    writable: true
});


// Q5 
var list = readHugeList();

var nextListItem = function () {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout(nextListItem, 0);
    }
};

function readHugeList() {
    let array = [5, 10, 7, 12.5, "banana"];
    return array;
}

nextListItem();

// Q6: what will the following code output?
// since i is VAR its value at the end of the loop will be 4, the 4th cell dosnt exist so its undefined
// timeout call the given function after atleast 3000ms since the eventloop calls given fuction when it gets to it.
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}


// The function setInterval using setTimeout and calls to callBack funcion at every delay seconds.
function setInterval(callBack, delay) {
    let a = {
        clear: function () {
            clearTimeout(a.timer)
        }
    };
    (function run() {
        callBack();
        a.timer = setTimeout(run, delay);
    })();

    return a;
}

// create an "interval"
var myInterval_1 = setInterval(() => { console.log(1) }, 1000);

// create another "interval" 
var myInterval_2 = setInterval(() => { console.log(2) }, 1000);

// clear the first interval
setTimeout(() => { myInterval_1.clear() }, 4000);

// clear the second interval
setTimeout(() => { myInterval_2.clear() }, 10000);
