// write a constructor function `WorkingPersonFunc` which inherits from `PersonFunc` and implements additional method:

// - getProfessionalNameAndRank() => returns string in format `"[FirstName] [LastName], [job title], job experience [job experience duration] years"`, e.g. _"User Name, Front-end developer, job experience 5 years"_.
// // NOTE: Please implement error handling in case if some fields are not available.

const { PersonFunc } = require("./task1.js");
const { SarahMay, JeremieBrown, Elizabeth } = require("./constants.js");
const { validateFields } = require("./utils.js");

function WorkingPersonFunc({ firstName, lastName, birthDate, address, job }) {
  PersonFunc.call(this, {
    firstName,
    lastName,
    birthDate,
    address,
  });

  this.job = validateFields(job, ["title", "experience"]);

  this.getProfessionalNameAndRank = function () {
    const { title, experience } = this.job;

    const pluralizedYear = experience === 1 ? "year" : "years";

    const showJobExperience =
      typeof experience === "number"
        ? `job experience ${experience} ${pluralizedYear}`
        : experience;

    return [this.getFullName(), title, showJobExperience].join(", ");
  };
}

const workingPerson1 = new WorkingPersonFunc(SarahMay);
const workingPerson2 = new WorkingPersonFunc(JeremieBrown);
const workingPerson3 = new WorkingPersonFunc(Elizabeth);
