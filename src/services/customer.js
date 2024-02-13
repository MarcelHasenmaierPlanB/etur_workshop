// cID is the unique ID of a customer
let cID = 0;
const arrAllCustomer = [];

function getID () {
    return cID;
}

function increaseID () {
    return ++cID;
}

// add customer and add unique ID
function createCustomer(input){
    arrAllCustomer.push(input);
    arrAllCustomer[arrAllCustomer.length - 1].cID = increaseID();
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

export {deleteCustomer};
export {readCustomer};
export {exportAllCustomer};
export {createCustomer};
//export {getID};