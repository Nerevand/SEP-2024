// Write a function getDayName(day) that returns the name of the day for a number (1 = Monday, 7 = Sunday) using a switch statement.
// Sample output:
// getDayName(1) => Monday
// getDayName(20) => Invalid day

const getDayName = (day) => {
  if (
    typeof day !== "number" ||
    Number.isNaN(day) ||
    !Number.isInteger(day) ||
    day < 0
  ) {
    throw new Error("Provided value must be a valid positive integer.");
  }

  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
};

getDayName(1);
