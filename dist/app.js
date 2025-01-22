function bubbleSort(inputArray) {
    var _a;
    var array = inputArray;
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1]; // Swap
            }
        }
    }
    return array;
}
function getMedian(inputNumbers) {
    var numbers = inputNumbers;
    numbers = bubbleSort(numbers);
    var arraySize = numbers.length;
    var median = 0;
    if ((arraySize % 2) === 0) {
        median = (numbers[arraySize / 2 - 1] + numbers[arraySize / 2]) / 2;
    }
    else {
        median = numbers[(arraySize - 1) / 2];
    }
    return median;
}
function getEmployeeData() {
    var _a;
    var userInput = prompt("Enter employee data: Name,age,department,salary");
    var employeeData = (_a = userInput === null || userInput === void 0 ? void 0 : userInput.split(",")) !== null && _a !== void 0 ? _a : [];
    var currEmployee = {
        name: employeeData[0],
        age: Number(employeeData[1]),
        department: employeeData[2],
        salary: Number(employeeData[3])
    };
    return currEmployee;
}
function getSalary(employeesList, wantedDepartment) {
    var salary = [];
    for (var i = 0; i < employeesList.length; i++) {
        if ((employeesList[i].department === wantedDepartment) || (wantedDepartment === "all")) {
            salary.push(employeesList[i].salary);
        }
    }
    return salary;
}
function salaryStatistics(employeesList, wantedDepartment) {
    var salary = getSalary(employeesList, wantedDepartment);
    var maxSalary = Math.max.apply(Math, salary);
    var minSalary = Math.min.apply(Math, salary);
    var avgSalary = (salary.reduce(function (acc, pay) { return acc + pay; }, 0)) / salary.length;
    var medSalary = getMedian(salary);
    alert("The salary statistics in " + wantedDepartment + " is:\n\n            Maximal Salary: " + maxSalary + "\n\n            Minimal Salary: " + minSalary + "\n\n            Average Salary: " + avgSalary + "\n\n            Median Salary: " + medSalary);
}
function workersRecordsystem() {
    alert("Welcome to the Workers Record system");
    var userInput = prompt("What would you like to do\n\n        1. Add worker record\n\n        2. See the current workers record\n\n        3. Remove worker from the records\n\n        4. Get statistics\n\n        \"Cancel\" to exit the system.");
    var employeesList = [];
    while (userInput !== null) {
        switch (userInput) {
            case "1":
                gradesRecord = addWorker(employeesList);
                break;
            case "2":
                alert(printWorkers(employeesList));
                break;
            case "3":
                gradesRecord = removeWorker(employeesList);
                break;
            case "4":
                getStatistics(employeesList);
                break;
            default:
                alert("I don't know what " + userInput + " is.");
        }
        userInput = prompt("What would you like to do\n\n            1. Add worker record\n\n            2. See the current workers record\n\n            3. Remove worker from the records\n\n            4. Get statistics\n\n            \"Cancel\" to exit the system.");
    }
    alert("Have a nice day!");
}
workersRecordsystem();
