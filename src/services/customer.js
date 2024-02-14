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
    input.cID = increaseCID();
    arrAllCustomers.push(input);
    console.log(arrAllCustomers[arrAllCustomers.length - 1]);
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

// true/false if customer number was found
/*function validateID (input) {
    return arrAllCustomers.find(element => element.cNr === input);
}
*/
//------------------------------------------
   
export {deleteCustomer};
export {readCustomer};
export {exportAllCustomer};
export {createCustomer};
//export {validateID}
//export {getID};