const { DATE_DD_MM_YYYY_REGEX } = require("./constants");

const calculateAge = (date) => {
  if (!DATE_DD_MM_YYYY_REGEX.test(date)) {
    throw new Error("Provide birth date in format: DD.MM.YYYY.");
  }

  const [day, month, year] = date?.split(".").map((item) => parseInt(item, 10));
  const convertedBirthDate = new Date(year, month - 1, day);
  const today = new Date();
  const diffInMilliSeconds = today - convertedBirthDate;
  const age = diffInMilliSeconds / (1000 * 60 * 60 * 24 * 365.25);

  return Math.floor(age);
};

const validateUser = (obj) => {
  if (!obj || typeof obj !== "object") {
    throw new Error("User object must provided.");
  }

  if (!Object.keys(obj).length) {
    throw new Error("User object is empty.");
  }
};

module.exports = { calculateAge, validateUser };
