
import { exportAllCustomer } from "./customer.js";
import {createCustomer } from "./customer.js";

const customer1 = {
    cID : increaseID(),
    cName : "ersterKunde",
    cNr : 1001,
    cMail : "erster@kunde.com"
 }
createCustomer = (customer1);

 const customer2 = {
    cID : increaseID(),
    cName : "zweiterKunde",
    cNr : 1002,
    cMail : "zweiter@kunde.com"
 }
 createCustomer = (customer2);

const customer3 = {
    cName : "dritterKunde",
    cNr : 1003,
    cMail : "dritter@kunde.com"
 }
createCustomer (customer3);

console.log(exportAllCustomer());
