const customer1 = {
    cName : "ersterKunde",
    cNr : 1001,
    cMail : "erster@kunde.com"
 }

 const arrAllCustomer = [customer1];

 console.log("-----Erster Kunde-----");
 console.log(arrAllCustomer);
 console.log(arrAllCustomer.length);
 console.log("----------");

 const customer2 = {
    cName : "zweiterKunde",
    cNr : 1002,
    cMail : "zweiter@kunde.com"
 }

 arrAllCustomer.push(customer2);

 console.log("-----Zweiter Kunde-----");
 console.log(arrAllCustomer);
 console.log(arrAllCustomer.length);
 console.log("----------");



function createCustomer(input){
  return arrAllCustomer.push(input);
}

function exportAllCustomers (){
console.log("-----Alle Kunden:-----");
    return arrAllCustomer
 }

export {exportAllCustomers};
export {createCustomer};