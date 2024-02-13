// cID is the unique ID of a customer
let cID = 0;

function getID () {
    return cID;
}

function increaseID () {
    return ++cID;
}

const customer1 = {
    cID : increaseID(),
    cName : "ersterKunde",
    cNr : 1001,
    cMail : "erster@kunde.com"
 }

 const arrAllCustomer = [customer1];

 const customer2 = {
    cID : increaseID(),
    cName : "zweiterKunde",
    cNr : 1002,
    cMail : "zweiter@kunde.com"
 }

 arrAllCustomer.push(customer2);

function createCustomer(input){
    arrAllCustomer.push(input);
    arrAllCustomer[arrAllCustomer.length - 1].cID = increaseID();
    return;
}

function exportAllCustomers (){
console.log("-----Alle Kunden:-----");
    return arrAllCustomer;
 }

export {exportAllCustomers};
export {createCustomer};
//export {getID};