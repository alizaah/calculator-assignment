import inquirer from 'inquirer';
let answers= await inquirer.prompt([
    {
type:"number",
name:"firstnum",
message:"Enter first number"
},
{
    type:"number",
    name:"secondnumber",
    message:"enter your second number"
},
{
    type:"input",
    name:"operator",
    message:"\n addition \n subtraction \n multiplication \n division \n Enter operator by sign :"
    }
])
if(answers.operator=="+")
{
    let sum=answers.firstnum + answers.secondnumber
    console.log("the addition is =",sum)
}
else if (answers.operator=="-")
{
    let sum=answers.firstnum-answers.secondnumber
    console.log("the subtraction is = ",sum)
}
if(answers.operator=="*"){
    let sum = answers.firstnum*answers.secondnumber
    console.log("the multiplication is= ",sum)
}
else if(answers.operator=="/"){
    let sum=answers.firstnum/answers.secondnumber
    console.log("the division is = ",sum)
}
else{
    console.log("invalid operator!")
}