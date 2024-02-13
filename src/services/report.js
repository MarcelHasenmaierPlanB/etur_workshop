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

function readReports (input) {
  return arrAllReports.find(element => element.repID === input);
}