const calculateAge = (date) => {
  const dotDateFormat = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;

  if (!dotDateFormat.test(date)) {
    throw new Error("Provide birth date in format: DD.MM.YYYY.");
  }

  const [day, month, year] = date?.split(".").map((item) => parseInt(item, 10));
  const convertedBirthDate = new Date(year, month - 1, day);
  const today = new Date();
  const diffInMilliSeconds = today - convertedBirthDate;
  const age = diffInMilliSeconds / (1000 * 60 * 60 * 24 * 365.25);

  return Math.floor(age);
};

const validateField = (value, requiredField) => {
  const isFalsyValue =
    value === "" ||
    value === null ||
    value === undefined ||
    value === false ||
    Number.isNaN(value);

  return isFalsyValue ? `${requiredField} is not provided` : value;
};

const validateFields = (obj, requiredFields, optionalFields = []) => {
  if (!obj || typeof obj !== "object" || obj === null) {
    throw new Error("An object should be provided.");
  }

  const validatedRequired = requiredFields.reduce((acc, currKey) => {
    return {
      ...acc,
      [currKey]: validateField(obj[currKey], currKey),
    };
  }, {});

  optionalFields.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      validatedRequired[key] = obj[key];
    }
  });

  return validatedRequired;
};

module.exports = { calculateAge, validateFields, validateField };
