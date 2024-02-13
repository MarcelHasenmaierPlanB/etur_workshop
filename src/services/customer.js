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