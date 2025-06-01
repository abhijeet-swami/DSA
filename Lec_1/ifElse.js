// Question:
// Given marks of a student, print on the screen:
// Grade A if marks >= 90
// Grade B if marks >= 70
// Grade C if marks >= 50
// Grade D if marks >= 35
// Fail, otherwise.

function studentGrade(marks) {
  if (marks >= 90) {
    console.log("Grade A");
  } else if (marks >= 70) {
    console.log("Grade B");
  } else if (marks >= 50) {
    console.log("Grade C");
  } else if (marks >= 35) {
    console.log("Grade D");
  } else {
    console.log("Fail");
  }
}

studentGrade(80);
studentGrade(30);
studentGrade(45);
