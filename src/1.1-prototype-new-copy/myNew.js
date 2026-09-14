function myNew(ctor, ...args) {
  const newObj = Object.create(ctor.prototype);
  const result = ctor.call(newObj, ...args);
  const isObjOrFunc =
    (typeof result === 'object' && typeof result !== null) ||
    typeof result === 'function';
  return isObjOrFunc ? result : newObj;
}

function returnVoid() {
  console.log('THIS: ', this);
  console.log('ARGS: ', ...arguments);
}

function returnObj() {
  console.log('THIS: ', this);
  console.log('ARGS: ', ...arguments);
  const reternObjArgs = arguments;
  function someFunc() {
    console.log('YOU ARE FReAK', ...reternObjArgs, ...arguments);
  }
  return { x: 1, b: someFunc };
}

const test1 = myNew(returnVoid);
const test2 = myNew(returnVoid, 1, 2, 3);
const test3 = myNew(returnObj);
const test4 = myNew(returnObj, 1, 2, 3);

console.log('test1', test1);
console.log('test2', test2);
console.log('test3', test3);
console.log('test4', test4);

const b = myNew(returnObj, 2, 3, 4);
console.log('b', b.b(4, 5, 6));
