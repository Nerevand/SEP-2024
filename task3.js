//  write a class `PersonClass` which has the same functionality as `PersonFunc` constructor function.
//  Don't forget to implement error handling in case if some fields are not available here as well.

const { SarahMay, JeremieBrown, Elizabeth } = require("./constants.js");
const { calculateAge, validateUser } = require("./utils.js");

class PersonClass {
  constructor(user) {
    validateUser(user);

    this.user = user;
  }

  getFullName() {
    const { firstName, lastName } = this.user;

    return firstName && lastName
      ? `${firstName} ${lastName}`
      : "Anonymous person.";
  }

  getAge() {
    const { birthDate } = this.user;

    return birthDate ? `${calculateAge(birthDate)} years` : "Age is unknown.";
  }

  getFullAddress() {
    const { country, city, street, house, apartment } = this.user.address;

    return country && city && street && house
      ? [
          country,
          city,
          street,
          apartment ? `${house}/${apartment}` : house,
        ].join(", ")
      : "Can't get full address.";
  }
}

const person1 = new PersonClass(SarahMay);
const person2 = new PersonClass(JeremieBrown);
const person3 = new PersonClass(Elizabeth);

module.exports = { PersonClass };
