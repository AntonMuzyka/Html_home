const info = 'True';
const mySity = { city: 'Brovary' };
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
