//  write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function.
//  Don't forget to implement error handling in case if some fields are not available here as well.

const { SarahMay, JeremieBrown, Elizabeth } = require("./constants.js");
const { calculateAge, validateFields, validateField } = require("./utils.js");

class PersonClass {
  constructor({ firstName, lastName, birthDate, address }) {
    this.firstName = validateField(firstName, "firstName");
    this.lastName = validateField(lastName, "lastName");
    this.birthDate = birthDate;
    this.address = validateFields(
      address,
      ["country", "city", "street", "house"],
      ["apartment"]
    );
  }

  getFullName() {
    const { firstName, lastName } = this;

    const isAnonimous =
      (firstName === "firstName is not provided" || !firstName) &&
      (lastName === "lastName is not provided" || !lastName);

    return !isAnonimous ? `${firstName} ${lastName}` : "anonimous person";
  }

  getAge() {
    return this.birthDate
      ? `${calculateAge(this.birthDate)} years`
      : "age is unknown";
  }

  getFullAddress() {
    const { country, city, street, house, apartment } = this.address;

    return [
      country,
      city,
      street,
      apartment ? `${house}/${apartment}` : house,
    ].join(", ");
  }
}

const person1 = new PersonClass(SarahMay);
const person2 = new PersonClass(JeremieBrown);
const person3 = new PersonClass(Elizabeth);

module.exports = { PersonClass };
