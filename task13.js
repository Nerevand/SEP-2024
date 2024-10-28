// Write a function getUserEmail(user) that returns the email of the user if it exists, or 'Email not found' using optional chaining.

const userObj = {
  email: "Jane@email.com",
};

const getUserEmail = (user) => {
  if (!user) {
    throw new Error("User not found.");
  }

  //   return user?.email ? user.email : "Email not found";
  return user?.email ?? "Email not found.";
};

getUserEmail(userObj);
