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
  input.repID = increaseRepID();
  arrAllReports.push(input);
  console.log(arrAllReports[arrAllReports.length - 1]);
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
  let foundElement = arrAllReports.find(element => element.repID === input);
  for (let i = 0; i < arrAllReports.length - 1; i++) {
    if (foundElement)
    obj.push(arrAllReports.element);
  }
  return obj;

  //return arrAllReports.find(element => element.customerId === input);
}

// 
function customerReportStatusCheck (input) {
  let tempArr = [];
  let obj = {};   // for console formatting reasons^^
  let foundElement = {};
  for (let i = 0; i < arrAllReports.length; i++) {
    foundElement = arrAllReports[i].customerId
    if (foundElement === input){
      tempArr.push(
        obj = {
          creater : arrAllReports[i].creater,               
          title : arrAllReports[i].title,              
          state : arrAllReports[i].state
        }
      )
    }
  }
  //console.log(tempArr)
;  return tempArr;
}

export {customerReportStatusCheck};
export {readAllReportsByCustomer};
export {createReport};
export {exportAllReports};
export {readReports};
export {getRepID};