const arr = [... new Array(10)].map((v, i) => i + 1);
const x = arr.filter(i => i % 3 === 1).reduce((x,y) => x + y);
console.log(x);
