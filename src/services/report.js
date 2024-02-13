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
  arrAllReports.push(input);
  let lastCreatedReportID = arrAllReports[arrAllReports.length - 1];
  lastCreatedReportID = {
      id: increaseRepID(),
  }
  console.log(lastCreatedReportID);
  return arrAllReports[arrAllReports.length - 1];
}

function exportAllReports (){
  console.log("-----Alle Reports:-----");
  return arrAllReports;
}

//return reports by reportID
function readReports (input) {
  return arrAllReports.find(element => element.repID === input);
}

//return reports by customer ID
function readAllReportsByCustomer (input) {
  let obj = {}
  for (let i = 0; i < arrAllReports.length - 1; i++) {
    if (arrAllReports.find(element => element.repID === input))
    obj.push(arrAllReports.element);
  }
  return obj;

  //return arrAllReports.find(element => element.customerId === input);
}

/*
TODO: HÄ?? 
// "element is not definded"
*/
function customerReportStatusCheck (input) {
  for (let i = 0; i < arrAllReports.length - 1; i++) {
    if (arrAllReports.find(element => element.customerId === input)){
    obj = {
      owner : element.owner,              // "element is not definded" 
      description : element.description,  // "element is not definded"
      state : element.state               // "element is not definded"
    }
    //obj.push(arrAllReports.element.owner);
    //obj.push(arrAllReports.element.description);
    //obj.push(arrAllReports.element.state);
    }
  }
  return obj;

  //return arrAllReports.find(element => element.customerId === input).state;
}

export {customerReportStatusCheck};
export {readAllReportsByCustomer};
export {createReport};
export {exportAllReports};
export {readReports};
export {getRepID};