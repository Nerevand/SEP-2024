// write a class `WorkingPersonClass` which inherits from `PersonClass` and has the same functionality as `WorkingPersonFunc`.
// Don't forget to implement error handling in case if some fields are not available here as well.

const { PersonClass } = require("./task3.js");
const { SarahMay, JeremieBrown, Elizabeth } = require("./constants.js");
const { validateFields } = require("./utils.js");

class WorkingPersonClass extends PersonClass {
  constructor({ firstName, lastName, birthDate, address, job }) {
    super({ firstName, lastName, birthDate, address });

    this.job = validateFields(job, ["title", "experience"]);
  }

  getProfessionalNameAndRank() {
    const { title, experience } = this.job;

    const pluralizedYear = experience === 1 ? "year" : "years";

    const showJobExperience =
      typeof experience === "number"
        ? `job experience ${experience} ${pluralizedYear}`
        : experience;

    return `${this.getFullName()}, ${title}, ${showJobExperience}`;
  }
}

const workingPerson1 = new WorkingPersonClass(SarahMay);
const workingPerson2 = new WorkingPersonClass(JeremieBrown);
const workingPerson3 = new WorkingPersonClass(Elizabeth);
