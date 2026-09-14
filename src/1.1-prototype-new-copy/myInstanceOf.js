function myInstanceOf(obj, ctor) {
  if (obj === null || (typeof obj !== 'function' && typeof obj !== 'object'))
    return false;
  const target = ctor.prototype;
  let prototype = Object.getPrototypeOf(obj);
  while (prototype !== null) {
    if (prototype === target) return true;
    prototype = Object.getPrototypeOf(prototype);
  }
  return false;
}
function Animal() {}

function Cat(...args) {
  Animal.call(this, ...args);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Dog() {}

const cat = new Cat();
const tiger = new Cat();
const dog = new Dog();

console.log(cat instanceof Cat);
console.log(myInstanceOf(tiger, Cat));
console.log(myInstanceOf(dog, Cat));
console.log(myInstanceOf(cat, Animal));
console.log(myInstanceOf(dog, Animal));
