
//  Grade Calculator 

// 1. Function to calculate grades
function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// 2. Store 10 scores in an array
let scores = [85, 47, 65, 48, 90, 55, 78, 30, 100, 60];

// 3. Loop through the scores and print each score with its grade
for (let i = 0; i < scores.length; i++) {
    console.log(
        `Student ${i + 1}: ${scores[i]} - ${getGrade(scores[i])}`
    );
}

// 4. Function to count scores of 50 or more
function countPassed(scores) {
    let count = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 50 && scores[i] <= 100) {
            count++;
        }
    }

    return count;
}

// 5. Function to calculate the class average
function getAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    let average = total / scores.length;

    return Math.round(average * 10) / 10;
}

// 6. Display the results
console.log("--------------------");
console.log(`Passed: ${countPassed(scores)} of ${scores.length}`);
console.log(`Class average: ${getAverage(scores)}`);






