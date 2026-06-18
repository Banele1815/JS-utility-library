/**
 * Reusable Array Filter Function
 *
 * Time Complexity: O(n)
 * The function goes through the array once.
 *
 * Space Complexity: O(n)
 * A new array is used to store the filtered items.
 */

/**
 * Filters students based on a condition.
 *
 * @param {Array<{name: string, score: number}>} students - An array of student objects.
 * @param {Function} callback - Checks if a student should be included.
 * @returns {Array<{name: string, score: number}>} The filtered students.
 */
function customFilter(students, callback) {
  const filteredStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (callback(students[i])) {
      filteredStudents.push(students[i]);
    }
  }

  return filteredStudents;
}

const students = [
  { name: "Kamo", score: 92 },
  { name: "Enny", score: 65 },
  { name: "Bea", score: 80 },
  { name: "Koketso", score: 48 },
];

const passedStudents = customFilter(students, function (student) {
  return student.score >= 50;
});

console.log(passedStudents);
