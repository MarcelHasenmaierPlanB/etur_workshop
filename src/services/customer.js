// cID is the unique ID of a customer
let cID = 0;
const arrAllCustomers = [];

function getID () {
    return cID;
}

function increaseCID () {
    return ++cID;
}

// add customer and add unique ID
function createCustomer(input){
    arrAllCustomers.push(input);
    let lastCreatedCustomerID = arrAllCustomers[arrAllCustomers.length - 1];
    lastCreatedCustomerID = {
        cID: increaseCID(),
    }
    console.log(lastCreatedCustomerID);
    return arrAllCustomers[arrAllCustomers.length - 1];
}

function exportAllCustomer (){
    console.log("-----Alle Kunden:-----");
    return arrAllCustomers;
}

function readCustomer (input) {
    return arrAllCustomers.find(element => element.cNr === input);
}

function deleteCustomer (input) {
    readCustomer(input).cName = "deletedCustomer";
    readCustomer(input).cMail = 'deleted@customer.com';
    readCustomer(input).cNr = -1;
    return arrAllCustomers;
}

function validateID(cNr, arrAllCustomers) {
    // Iteriere durch das Array und überprüfe, ob die Kundennummer vorhanden ist
    for (let i = 0; i < arrAllCustomers.length; i++) {
        if (cNr === arrAllCustomers[i]) {
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