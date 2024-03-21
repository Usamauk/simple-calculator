#! /usr/bin/env node
// Terminal pr excute krne ke leye mean npm m dalne ke leye shabang (sha #) (bang !)

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "Enter your First number:", type: "number", name: "Firstnumber" },
  { message: "Enter your Second number:", type: "number", name: "Secondnumber" },
  {
    message: "select your operator:",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Square root",
    ],  
  },
]);



if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);   
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);   
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);   
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);   
}
else if (answer.operator === "Square root") {
    console.log(answer.Firstnumber ** answer.Secondnumber);   
}
else {
    console.log("invalid operator");
    
}
