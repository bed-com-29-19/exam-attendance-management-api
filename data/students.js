const studentsDatabase = {
  "BED/COM/29/19": { name: "Richard Mlambuzi", exists: true },
  "BED/COM/18/20": { name: "Kayira Willious", exists: true },
  "BSC/COM/24/19": { name: "Alice Smith", exists: true },
  "BED/ENG/35/19": { name: "Bob Johnson", exists: true },
  "BED/MAT/20/20": { name: "Eve Williams", exists: true },
  "BED/MAT/15/19": { name: "Charlie Brown", exists: true },
  "BED/SCI/10/18": { name: "Olivia Davis", exists: true },
  "BED/SCI/25/20": { name: "David Miller", exists: true },
};

const getStudentByRegNumber = (regNumber) => {
  return studentsDatabase[regNumber];
};

module.exports = {
  getStudentByRegNumber,
};
