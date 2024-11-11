// write a constructor function PersonFunc which accepts the person data like below and implements following methods:

// getFullName() => returns string in format "[FirstName] [LastName]", e.g. 'User Name';
// getAge() => returns age of person in format "[number] years", e.g. "20 years";
// getFullAddress() => returns address string in format "[country], [city], [street], [house]/[apartment]". Field apartment is optional. E.g. "Ukraine, Lviv, Doroshenka street, 5/8" and "Ukraine, Lviv, Muchna street, 7".
// // NOTE: Please implement error handling in case if some fields are not available.

const { SarahMay, JeremieBrown, Elizabeth } = require("./constants.js");
const { calculateAge, validateUser } = require("./utils.js");

function PersonFunc(user) {
  validateUser(user);

  this.user = user;
}

PersonFunc.prototype.getFullName = function () {
  const { firstName, lastName } = this.user;

  return firstName && lastName
    ? `${firstName} ${lastName}`
    : "Anonymous person.";
};

PersonFunc.prototype.getAge = function () {
  const { birthDate } = this.user;

  return birthDate ? `${calculateAge(birthDate)} years` : "Age is unknown.";
};

PersonFunc.prototype.getFullAddress = function () {
  const { country, city, street, house, apartment } = this.user.address;

  return country && city && street && house
    ? [country, city, street, apartment ? `${house}/${apartment}` : house].join(
        ", "
      )
    : "Can't get full address.";
};

const person1 = new PersonFunc(SarahMay);
const person2 = new PersonFunc(JeremieBrown);
const person3 = new PersonFunc(Elizabeth);

module.exports = { PersonFunc };
