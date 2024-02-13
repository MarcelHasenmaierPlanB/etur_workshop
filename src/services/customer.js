// cID is the unique ID of a customer
let cID = 0;
const arrAllCustomer = [];

function getID () {
    return cID;
}

function increaseID () {
    return ++cID;
}

function createCustomer(input){
    arrAllCustomer.push(input);
    arrAllCustomer[arrAllCustomer.length - 1].cID = increaseID();
    return;
}

function exportAllCustomer (){
console.log("-----Alle Kunden:-----");
    return arrAllCustomer;
 }

 function readCustomer (input) {
    arrAllCustomer.forEach(element => {
        if (input === cNr) {
            return element;
        }
    });
 }

 function deleteCustomer (input) {
    arrAllCustomer.forEach(element => {
        if (input === cNr) {
            cName = "deletedCustomer";
            cNr = -1;
            cMail = "deleted@customer.com";
            return element;
        }
    })
 }

export {readCustomer};
export {exportAllCustomer};
export {createCustomer};
//export {getID};
