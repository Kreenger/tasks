function deepCopy(obj, seen = new WeakMap()) {
  if (!(obj instanceof Object)) {
    return obj;
  }

  if (seen.has(obj)) {
    return seen.get(obj);
  }

  let copy;

  if (obj instanceof Date) {
    copy = new Date(obj);
  } else if (obj instanceof Map) {
    copy = new Map(Array.from(obj, ([key, val]) => [key, deepCopy(val, seen)]));
  } else if (obj instanceof Set) {
    copy = new Set(Array.from(obj, (val) => deepCopy(val, seen)));
  } else if (obj instanceof Object) {
    copy = Object.create(Object.getPrototypeOf(obj));
    seen.set(obj, copy);
    for (let key in obj) {
      copy[key] = deepCopy(obj[key], seen);
    }
  }

  return copy;
}

const obj1 = {
  a: 1,
  b: {
    c: 2,
  },
};

const obj2 = deepCopy(obj1);

obj2.b.c = 3;

console.log(obj1.b.c); // Вывод: 2
console.log(obj2.b.c); // Вывод: 3
