// const module = {
//   x: 42,
//   y: 8,
//   getX() {
//     return this?.x;
//   },
//   sum(a, b) {
//     return a + b;
//   },
// };

// const unboundGetX = module.getX;
// const boundGetX1 = module.getX();
// console.log('unboundGetX', unboundGetX());
// console.log('boundGetX1', boundGetX1);

// // const boundGetX = unboundGetX.bind(module);
// const boundGetX = unboundGetX.call(module);
// console.log(boundGetX);
// // function myBind(fn, thisArg, ...args) {
// //   return function () {
// //     // call imitation
// //     const fnKey = Symbol('fn');
// //     thisArg[fnKey] = fn;
// //     const result = thisArg[fnKey]();
// //     delete thisArg[fnKey];

// //     return result;
// //   };
// // }

// function myBind(fn, thisArg, ...args) {
//   return function (...funcCallArgs) {
//     const finalArgsArr = [...args, ...funcCallArgs];
//     return fn.call(thisArg, ...finalArgsArr);
//   };
// }

// const myBoundX = myBind(module.sum, null, 1, 2);
// console.log('myBind exec :', myBoundX(3));

// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
// };
// const data = {
//   a: 5,
//   b: 10,
// };

// const summ = calculator.add.call(data, data.a, data.b);
// const multiply = calculator.multiply.apply(data, [data.a, data.b]);
// console.log('summ', summ);
// console.log('summ', multiply);

// const obj = {
//   value: 10,
//   method() {
//     return function () {
//       console.log(this?.value);
//     };
//   },
// };

// const f = obj.method();
// const newF = f.bind(obj);
// newF(); // Що виведе?

// function createCounter(initialValue) {
//   const obj = {};
//   let value = initialValue;
//   obj.increment = function () {
//     console.log('increment', value + 1);
//     return (value = value + 1);
//   };
//   obj.getValue = function () {
//     console.log(value);
//   };

//   return obj;
// }

// const counter1 = createCounter(6);
// counter1.increment();
// counter1.increment();
// counter1.getValue();

// function greet(greeting, punctuation) {
//   return `${greeting}, ${this.name}${punctuation}`;
// }
// const test = new greet('SOOOKA', 'NAHOOOI');
// console.log(test());
// const sayHi = partialBind(greet, 'Привіт');

// // Виклик:
// // { name: "Іван" } — це контекст (this)
// // "!" — це аргумент, який додається до "Привіт"
// console.log(sayHi({ name: 'Іван' }, '!'));
// // Очікуваний результат: "Привіт, Іван!"

// function partialBind(fn, ...args) {
//   return function (thisArg, ...funcArgs) {
//     const arr = [...args, ...funcArgs];
//     return fn.call(thisArg, ...arr);
//   };
// }

// function myBind(fn, thisArg, ...args) {
//   return function bounded(...funcCallArgs) {
//     const finalArgsArr = [...args, ...funcCallArgs];
//     if (this instanceof bounded) {
//       return new fn(...finalArgsArr);
//     } else {
//       return fn.call(thisArg, ...finalArgsArr);
//     }
//   };
// }
// function Cat(name) {
//   this.name = name;
// }
// const BoundedCat = myBind(Cat, { x: 1 });
// const myCat = new BoundedCat('Murka');
// console.log(myCat instanceof Cat); // Що виведе?
// const obj = {
//   x: 2,
// };
// //instanceof fn дає true, і всередині конструктора this — новий об’єкт, а не obj.
// const test = new (myBind(Cat, obj, 1))(2);
// console.log(test instanceof Cat);

// if (!Function.prototype.bind) {
//   Function.prototype.bind = function (oThis) {
//     if (typeof this !== 'function') {
//       // ближайший аналог внутренней функции
//       // IsCallable в ECMAScript 5
//       throw new TypeError(
//         'Function.prototype.bind - what is trying to be bound is not callable',
//       );
//     }

//     var aArgs = Array.prototype.slice.call(arguments, 1),
//       fToBind = this,
//       fNOP = function () {},
//       fBound = function () {
//         return fToBind.apply(
//           this instanceof fNOP && oThis ? this : oThis,
//           aArgs.concat(Array.prototype.slice.call(arguments)),
//         );
//       };

//     fNOP.prototype = this.prototype;
//     fBound.prototype = new fNOP();

//     return fBound;
//   };
// }
// const TimeoutOvj = {
//   a: setTimeout(() => {
//     console.log(this);
//   }, 2),
//   b: 1,
// };
// console.log(a());

// setTimeout(() => {
//   console.log(this);
// }, 2);
'use strict';
setTimeout(function () {
  'use strict';
  console.log(this);
}, 2);

// function testFunc() {
//   const a = 1,
//     b = 2;

//   return function () {
//     console.log('2222', this);
//     return this;
//   };
// }

// testFunc();
