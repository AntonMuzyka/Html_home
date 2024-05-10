const info = 'True';
const mySity = {
  city: 'Brovary'
};
console.log(mySity);
mySity['country'] = 'uk';
console.log(mySity);
mySity.info = 'True';
console.log(mySity);
JSON.stringify(mySity);

function myFn() {
  let a = 10;
  return console.log(a);
}

myFn();

function arr(a, b) {
  return a + b;
}

console.log(arr(4, 6));

const arr1 = (a, b) => {
  return a + b;
};

console.log(arr1(6, 5));

// const text = 'helo world';
console.log((text = text.toLocaleUpperCase()));
console.log(text);

// const text = 'helo world';
// console.log(text.slice(text.indexOf('w'), text.indexOf('d')));
// console.log(text.indexOf('w'));