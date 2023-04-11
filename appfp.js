

// Q1: Addition of two numbers
// function rival(br){
//     return function(sr){
//         console.log(br + sr);
//     }
// }
// let vr_s = rival(9);
// vr_s(9);



// Q2: searching element in an array through recurrsion
// function searchArray(arr, x, i = 0) {
//     if (i >= arr.length) {
//       return false; // base case: element not found
//     }
    
//     if (arr[i] === x) {
//       return true; // base case: element found
//     }
    
//     return searchArray(arr, x, i + 1); // recursive call with i incremented
//   }
  
//   let arr = [];
//   for (let i = 1; i <= 3; i++) {
//     let userInput = +prompt("Enter a number: ");
//     arr.push(userInput);
//   }
//   console.log(arr);
  
//   let x = +prompt("Enter a number to search: ");
//   if (searchArray(arr, x)) {
//     console.log(x + " exists in the array.");
//   } else {
//     console.log(x + " does not exist in the array.");
//   }



// Q6: function that saves an object to localStorage.
// let prestud = localStorage.getItem("students"); // get from localStorage
// let students = prestud ? JSON.parse(prestud) : [];
// function provideData (){
//     let stu = {
//         name : prompt("Name: "),
//         rollno: prompt("Roll No: "),
//         teacher: prompt("Teacher Name: "),
//         course: prompt("Course Name: "),
//     };
//     students.push(stu);
//     console.log(students);
//     let stringfy123 = JSON.stringify(students); // convert it to string
//     localStorage.setItem("students", stringfy123); // save it to localStorage
// }






    
// Q7: retrive the an object from storage.
// function getObjectFromLocalStorage(key) {
    // Retrieve the JSON string from localStorage for the provided key
//     const storedValue = localStorage.getItem(key);
  
    // If no value was found, return null
//     if (!storedValue) {
//       return null;
//     }
  
    // Parse the JSON string into an object and return it
//     return JSON.parse(storedValue);
//   }
//   const myObject = getObjectFromLocalStorage('myKey');

//   if (myObject) {
//     console.log('Retrieved object from localStorage:', myObject);
//   } else {
//     console.log('No object found in localStorage for key "myKey"');
//   }
    



// Q8: Function .... Local Storage property
// let prestud = localStorage.getItem("students"); // get from localStorage
// let students = prestud ? JSON.parse(prestud) : [];
// function provideData (){
//     let stu = {
//         name : prompt("Name: "),
//         rollno: prompt("Roll No: "),
//         teacher: prompt("Teacher Name: "),
//         course: prompt("Course Name: "),
//     };
//     students.push(stu);
//     console.log(students);
//     let stringfy123 = JSON.stringify(students); // convert it to string
//     localStorage.setItem("students", stringfy123); // save it to localStorage
// }






