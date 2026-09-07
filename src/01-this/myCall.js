function myCall(fn, ctx, ...args) {
  const fnKey = Symbol('a');
  ctx[fnKey] = fn;
  const result = ctx[fnKey](...args);
  delete ctx[fnKey];
  return result;
}

function text(name, price) {
  if (name && price) return `theFunc ${name} with price ${price}`;
  if (this) return `theFunc ${this.name} with price ${this.price}`;
}
const b = text('Ihor', 10);
console.log(b);

const a = myCall(text, { name: 'Shasha', price: 20 }, 'Petya', 30);
console.log(a);
