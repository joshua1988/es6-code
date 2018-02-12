const parent = ['Mother', 'Father'];
const jimmy = {
  firstName: 'Bae',
  age: 40,
  ['parent' + parent[0]]: 'Susan Park',
  ['parent' + parent[1]]: 'Peter Bae'
};
console.log(jimmy.parentMother); // Susan Park
console.log(jimmy.parentFather); // Peter Bae