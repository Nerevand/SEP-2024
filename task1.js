// write a constructor function PersonFunc which accepts the person data like below and implements following methods:

// getFullName() => returns string in format "[FirstName] [LastName]", e.g. 'User Name';
// getAge() => returns age of person in format "[number] years", e.g. "20 years";
// getFullAddress() => returns address string in format "[country], [city], [street], [house]/[apartment]". Field apartment is optional. E.g. "Ukraine, Lviv, Doroshenka street, 5/8" and "Ukraine, Lviv, Muchna street, 7".
// // NOTE: Please implement error handling in case if some fields are not available.

const { SarahMay, JeremieBrown, Elizabeth } = require("./constants.js");
const { calculateAge, validateFields, validateField } = require("./utils.js");

function PersonFunc({ firstName, lastName, birthDate, address }) {
  this.firstName = validateField(firstName, "firstName");
  this.lastName = validateField(lastName, "lastName");
  this.birthDate = birthDate;
  this.address = validateFields(
    address,
    ["country", "city", "street", "house"],
    ["apartment"]
  );

  this.getFullName = function () {
    const { firstName, lastName } = this;

    const isAnonimous =
      (firstName === "firstName is not provided" || !firstName) &&
      (lastName === "lastName is not provided" || !lastName);

    return !isAnonimous ? `${firstName} ${lastName}` : "anonimous person";
  };

  this.getAge = function () {
    return this.birthDate
      ? `${calculateAge(this.birthDate)} years`
      : "age is unknown";
  };

  this.getFullAddress = function () {
    const { country, city, street, house, apartment } = this.address;

    return [
      country,
      city,
      street,
      apartment ? `${house}/${apartment}` : house,
    ].join(", ");
  };
}

const person1 = new PersonFunc(SarahMay);
const person2 = new PersonFunc(JeremieBrown);
const person3 = new PersonFunc(Elizabeth);

module.exports = { PersonFunc };
