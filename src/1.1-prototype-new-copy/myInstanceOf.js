function myInstanceOf(obj, ctor) {
  console.log('111', Object.getPrototypeOf(obj));
  console.log('222', Object.getPrototypeOf(new ctor()));
}
function Cat() {}

function Dog() {}

const cat = new Cat();
const tiger = new Cat();
const dog = new Dog();

console.log(cat instanceof Cat);
// console.log(Object.getPrototypeOf(Cat));
console.log(myInstanceOf(tiger, Cat));
