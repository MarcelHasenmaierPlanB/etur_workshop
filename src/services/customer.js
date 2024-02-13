// cID is the unique ID of a customer
let cID = 0;
// repID is the unique ID of a report
let repID = 0;
const arrAllCustomer = [];

function getID () {
    return cID;
}

function getRepID () {
    return repID;
}

function increaseCID () {
    return ++cID;
}

function increaseRepID () {
    return ++repID;
}

// add customer and add unique ID
function createCustomer(input){
    arrAllCustomer.push(input);
    let lastCreatedCustomerID = arrAllCustomer[arrAllCustomer.length - 1];
    lastCreatedCustomerID = {
        cID: increaseCID(),
    }
    console.log(lastCreatedCustomerID);
    return arrAllCustomer[arrAllCustomer.length - 1];
}

function exportAllCustomer (){
    console.log("-----Alle Kunden:-----");
    return arrAllCustomer;
 }

function readCustomer (input) {
    return arrAllCustomer.find(element => element.cNr === input);
 }

function deleteCustomer (input) {
    readCustomer(input).cName = "deletedCustomer";
    readCustomer(input).cMail = 'deleted@customer.com';
    readCustomer(input).cNr = -1;
    return arrAllCustomer;
 }

function validateID(cNr, arrAllCustomer) {
    // Iteriere durch das Array und überprüfe, ob die Kundennummer vorhanden ist
    for (let i = 0; i < arrAllCustomer.length; i++) {
        if (cNr === arrAllCustomer[i]) {
        return true; // Kundennummer gefunden
        }
    }
    return false; // Kundennummer nicht gefunden
    }
    
export {deleteCustomer};
export {readCustomer};
export {exportAllCustomer};
export {createCustomer};
export {validateID}
//export {getID};