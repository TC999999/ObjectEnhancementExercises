//Exercise 1: Same Keys and Values
//ES5
// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }
//ES2015
const createInstructor = (firstName, lastName) => {
  return { firstName, lastName };
};

//Exercise 2: Computed Property Names
//ES5
// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"
//ES2015
const favoriteNumber = 42;
const instructorCPN = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite",
};

//Exercise 3: Object Methods
//ES5
// var instructor = {
//   firstName: "Colt",
//   sayHi: function () {
//     return "Hi!";
//   },
//   sayBye: function () {
//     return this.firstName + " says bye!";
//   },
// };
//ES2015
const instructorOM = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

//Exercise 4: createAnimal
const createAnimal = (species, verb, noise) => {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
};
