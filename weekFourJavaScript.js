//WEEK 4 CLASS EXERCISE: UPDATING THE DEVICE PROFILE
var laptopProfile = {
    brand: "Dell",
    ram: 8, 
    isSsd: true 

}
 
laptopProfile.ram = 16
laptopProfile["storage"] = "512GB"
delete laptopProfile.isSsd
for (let key in laptopProfile) {
    console.log(key + ": " + laptopProfile[key]);
}


//WEEK 4 ASSIGNMENT: THE STUDENT LEDGER DIRECTORY
// Construct an array named studentDirectory
let studentDirectory = [
    {
        name: "Alice",
        age: 20,
        scores: {
            javascript: 85,
            css: 90
        },
        evaluatePerformance: function () {
            let average = (this.scores.javascript + this.scores.css) / 2;
            return `${this.name} has an average grade of ${average}`;
        }
    },
    {
        name: "Brian",
        age: 22,
        scores: {
            javascript: 78,
            css: 82
        },
        evaluatePerformance: function () {
            let average = (this.scores.javascript + this.scores.css) / 2;
            return `${this.name} has an average grade of ${average}`;
        }
    },
    {
        name: "Cynthia",
        age: 21,
        scores: {
            javascript: 92,
            css: 88
        },
        evaluatePerformance: function () {
            let average = (this.scores.javascript + this.scores.css) / 2;
            return `${this.name} has an average grade of ${average}`;
        }
    }
];

// Loop through the array and display each student's performance
for (let student of studentDirectory) {
    console.log(student.evaluatePerformance());
}


