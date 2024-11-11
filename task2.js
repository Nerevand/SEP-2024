// write a constructor function `WorkingPersonFunc` which inherits from `PersonFunc` and implements additional method:

// - getProfessionalNameAndRank() => returns string in format `"[FirstName] [LastName], [job title], job experience [job experience duration] years"`, e.g. _"User Name, Front-end developer, job experience 5 years"_.
// // NOTE: Please implement error handling in case if some fields are not available.

const { PersonFunc } = require("./task1.js");
const { SarahMay, JeremieBrown, Elizabeth } = require("./constants.js");

function WorkingPersonFunc(user) {
  PersonFunc.call(this, user);
}

WorkingPersonFunc.prototype = Object.create(PersonFunc.prototype);

WorkingPersonFunc.prototype.constructor = WorkingPersonFunc;

WorkingPersonFunc.prototype.getProfessionalNameAndRank = function () {
  const { title, experience } = this.user.job;

  const showJobExperience =
    typeof experience === "number"
      ? `job experience ${experience} ${pluralizedYear}`
      : experience;

  return [this.getFullName(), title, showJobExperience].join(", ");
};

const workingPerson1 = new WorkingPersonFunc(SarahMay);
const workingPerson2 = new WorkingPersonFunc(JeremieBrown);
const workingPerson3 = new WorkingPersonFunc(Elizabeth);
