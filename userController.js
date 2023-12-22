// userController.js
const users = [
  {
    userName: "admin",
    password: "adminPassword", // Plain text password for "admin"
  },
];

// Function to find a user by their username
const findUserByUsername = (userName) =>
  users.find((user) => user.userName === userName);

// Function to authenticate a user without hashed passwords
const authenticateUser = (userName, password) => {
  const user = findUserByUsername(userName);

  // Check if user exists and passwords match
  if (user && user.password === password) {
    // Return user information if authenticated
    return { userName: user.userName };
  }

  // Return null if authentication fails
  return null;
};

module.exports = { authenticateUser };
