#!/usr/bin/env node
/// this above line is called shebang line and it is used to tell the operating system what interpreter to use to run the file
// we import inquirer so inquirer is command line interface for node js
import inquirer from "inquirer";
//declare a constant responce  and assign it to the result of the inquirer.promt method
const responce:{Sentence:string}=await inquirer.prompt([
    
    {name:"Sentence",
    type:"input", 
    message:"Enter a sentence:"
}

])

const words = responce.Sentence.trim().split(" ")
// print the array of words to console
// print the word count of the sensternce to console

console.log(`Your phrase word tally is... ${words.length} `)