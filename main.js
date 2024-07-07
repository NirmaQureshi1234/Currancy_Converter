#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Define the list of currencies exchange rules
console.log(chalk.italic.bold.bgYellow("WELLCOME TO MY CURRENCY CONVERTOR"));
let exchangerates = {
    USD: 1, // base currency
    EUR: 0.91, //europion currency (euro)
    JPY: 144.27, //japanies currency (yen)
    CAD: 1.32, //canadian dollar
    AUD: 1.52, //australian dollar
    PKR: 276.75, //pakistani rupees
    AFN: 87.75, //Afghan or Afghani
    SAR: 3.75, //Saudi Arabian Riyal
    TRY: 26.95 //Turkish Lira
};
//prompt the user to select currencies
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: (chalk.bgCyan("select the currency to convert from")),
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR", "AFN", "SAR", "TRY"],
    },
    {
        name: "to_currency",
        type: "list",
        message: (chalk.yellow("select the currency to convert into")),
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR", "AFN", "SAR", "TRY"],
    },
    {
        name: "amount",
        type: "input",
        message: (chalk.red("select the currency to convert into"))
    },
]);
let from_amount = exchangerates[user_answer.from_currency];
let to_amount = exchangerates[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(chalk.redBright(`converted Amount = ${converted_amount.toFixed(2)}`));
