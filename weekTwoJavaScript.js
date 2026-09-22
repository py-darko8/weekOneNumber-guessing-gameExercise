//WEEK TWO EXERCISE
let techStack = ["HTML", "CSS", "Bootstrap", "Python"]
console.log(techStack[2])
techStack[2] = "Tailwind CSS"
techStack.push("JavaScript")

for(i=0; i < techStack.length; i++){
    console.log(techStack[i])
}

//WEEK TWO ASSIGNMENT
let studentScores = [45, 82, 68, 91, 55];

for (let score of studentScores) {
  if (score >= 85) {
    console.log(`Score [${score}]: Excellent Job`);
  } else if (score >= 65 && score <= 84) {
    console.log(`Score [${score}]: Good Job!`);
  } else {
    console.log(`Score [${score}]: Keep trying!`);
  }
}