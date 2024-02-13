// repID is the unique ID of a report
let repID = 0;
const arrAllReports = [];

function getRepID () {
  return repID;
}

function increaseRepID () {
  return ++repID;
}

// add customer and add unique ID
function createReport(input){
  arrAllCustomer.push(input);
  let lastCreatedCustomerID = arrAllCustomer[arrAllCustomer.length - 1];
  lastCreatedCustomerID = {
      cID: increaseCID(),
  }
  console.log(lastCreatedCustomerID);
  return arrAllCustomer[arrAllCustomer.length - 1];
}

function exportAllReports (){
  console.log("-----Alle Kunden:-----");
  return arrAllCustomer;
}

function readReports (input) {
  return arrAllCustomer.find(element => element.cNr === input);
}

function deleteReports (input) {
  readCustomer(input).cName = "deletedCustomer";
  readCustomer(input).cMail = 'deleted@customer.com';
  readCustomer(input).cNr = -1;
  return arrAllCustomer;
}