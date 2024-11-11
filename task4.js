// write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`.
// Don't forget to implement error handling in case if some fields are not available here as well.

const { PersonClass } = require("./task3.js");
const { SarahMay, JeremieBrown, Elizabeth } = require("./constants.js");

class WorkingPersonClass extends PersonClass {
  constructor(user) {
    super(user);
  }

  getProfessionalNameAndRank() {
    const { title, experience } = this.user.job;

    const pluralizedYear = experience === 1 ? "year" : "years";

    return [
      this.getFullName(),
      title && experience
        ? `${title}, job experience ${experience} ${pluralizedYear}`
        : "Can't get professional name and rank.",
    ].join(", ");
  }
}

const workingPerson1 = new WorkingPersonClass(SarahMay);
const workingPerson2 = new WorkingPersonClass(JeremieBrown);
const workingPerson3 = new WorkingPersonClass(Elizabeth);
