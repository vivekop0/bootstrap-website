function calculatePercentage() {
    let totalScore = 0;
    let totalPossibleScore = 0;

    const numSubjects = parseInt(prompt("Enter the number of subjects:"));

    for (let i = 0; i < numSubjects; i++) {
        const score = parseFloat(prompt("Enter the score obtained:"));
        const maxScore = parseFloat(prompt("Enter the maximum possible score:"));

        totalScore += score;
        totalPossibleScore += maxScore;
    }

    const percentage = (totalScore / totalPossibleScore) * 100;

    return percentage;
}

// Call the function and display the result
const percentage = calculatePercentage();
console.log(`The student's percentage is: ${percentage.toFixed(2)}%`);
