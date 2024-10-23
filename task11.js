// Write a function canDrive(age, hasLicense) that returns true if the person is 18 or older and has a valid license, otherwise false.

const canDrive = (age, hasLicense) => {
  if (typeof age !== "number" || Number.isNaN(age) || !Number.isInteger(age)) {
    throw new Error(
      "Provided value must be a valid integer, that starts from 1"
    );
  }

  return age >= 18 && hasLicense ? true : false;
};

canDrive(24, false);
