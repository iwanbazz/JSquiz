// Reusable sort function
const sort_by = (field, reverse, primer) => {
  const key = primer
    ? function (x) {
        return primer(x[field]);
      }
    : function (x) {
        return x[field];
      };

  reverse = !reverse ? 1 : -1;

  return function (a, b) {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};

const names = [
  { firstName: 'Daniel', lastName: 'Craig', dob: '1968-11-02' },
  { firstName: 'Chris', lastName: 'Evans', dob: '1981-06-13' },
  { firstName: 'Ana', lastName: 'de Armas', dob: '1988-04-30' },
];

console.log(names.sort(sort_by('dob', false, (a) => a.toUpperCase())));
