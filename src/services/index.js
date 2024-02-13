
import { deleteCustomer, exportAllCustomer } from "./customer.js";
import { createCustomer } from "./customer.js";

const customer1 = {
    cName : "ersterKunde",
    cNr : 1001,
    cMail : "erster@kunde.com"
 }

const customer2 = {
    cName : "zweiterKunde",
    cNr : 1002,
    cMail : "zweiter@kunde.com"
 }

const customer3 = {
    cName : "dritterKunde",
    cNr : 1003,
    cMail : "dritter@kunde.com"
 }

 function randomDelete(){
const randomNumber = Math.floor(Math.random() * 3) + 1 + 1000;
console.log(randomNumber);
 }

createCustomer (customer1);
createCustomer (customer2);
createCustomer (customer3);
console.log(exportAllCustomer());
randomDelete();

deleteCustomer (randomDelete());
console.log(exportAllCustomer());

