function gradeAssignment(){
    let grade = promp("Enter your grade:");
    grade = parseInt(grade);

    if (grade >= 90) {
        alert("Exellent");
    } else if (grade >= 80) {
        alert("Good");
    } else if (grade >= 70) {
        alert("Fair");
    } else {
        alert("Needs Improvement");
    }
}    