
import { exportAllCustomer } from "./customer.js";
import {createCustomer } from "./customer.js";


const customer3 = {
    cName : "dritterKunde",
    cNr : 1003,
    cMail : "dritter@kunde.com"
 }

createCustomer (customer3);
console.log(exportAllCustomer());
