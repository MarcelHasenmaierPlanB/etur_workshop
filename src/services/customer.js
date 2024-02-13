 const customer1 = {
    cName : "ersterKunde",
    cNr : 1001,
    cMail : "erster@kunde.com"
 }

 const arrAllCustomer = [customer1];

 console.log(arrAllCustomer);
 console.log(arrAllCustomer.length);
 console.log("----------");

 const customer2 = {
    cName : "zweiterKunde",
    cNr : 1002,
    cMail : "zweiter@kunde.com"
 }

 arrAllCustomer.push(customer2);

 console.log(arrAllCustomer);
 console.log(arrAllCustomer.length);
 console.log("----------");

 function exportAllCustomer () {
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