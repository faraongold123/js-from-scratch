function myApply(func, ctx, args) {
  const fnKey = Symbol('fn');
  ctx[fnKey] = func;
  const result = ctx[fnKey](...args);

  delete ctx[fnKey];
  return result;
}

const summ = function (a, b) {
  console.log(this);
  return a + b;
};
const a = summ(1, 2);
const b = myApply(summ, { newContext: true }, [1, 2]);

console.log(a);
console.log(b);
