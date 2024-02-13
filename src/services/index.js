import { exportAllCustomer, readCustomer, deleteCustomer } from "./customer.js";
import { createReport, exportAllReports, readReports } from "./report.js";
import { createCustomer } from "./customer.js";
import { validateID } from "./customer.js";

function randomDelete(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 + 1000;
    console.log(randomNumber);
 }

// initialize the server
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/getAllCustomers', async function handler (request, reply) {
    const exportedCustomers = exportAllCustomer();
    return exportedCustomers;
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

// API
fastify.post('/createCustomer', async function handler (request, reply) {
    createCustomer(request.body);
})

fastify.delete("/deleteCustomerByCNR/:id", async function handler(request, reply) {
    deleteCustomer(request.params.id);
  });

// <--- create customer ---> //
const customer1 = {
    cName : "ersterKunde",
    cNr : 1001,
    cMail : "erster@kunde.com"
 }

const customer2 = {
    cName : "zweiterKunde",
    cNr : 1002,
    cMail : "zweiter@kunde.com"
 }

const customer3 = {
    cName : "dritterKunde",
    cNr : 1003,
    cMail : "dritter@kunde.com"
 }

// <--- create reports ---> //
const report1 = {
    category: "Feeback",
    customerId: 1001,
    description: "This is a description",
    labels: ["label1", "label2"],
    owner: "Product Manager",
    assignedTo: "Jens Reiner",
    createdAt: "2020-01-01:12:00:00",
    editedAt: "2020-01-01:12:00:00",
    closedAt: "2020-01-01:12:00:00",
    state: "Open",
    priority: 1,
    comments: [
        {
            author: "Jens Reiner",
            message: "This is a comment",
            createdAt: "2020-01-01:12:00:00",
            type: 'developer',
        },
    ],
    closeReason: "This is a close reason",
    references: [
        {
            type: "github",
            url: "",
            issueNumber: 1
        }
    ]
};
const report2 = {
    category: "Bug",
    customerId: 1002,
    description: "wE haVe pRoBlEmS !!!111",
    labels: ["label1", "label2"],
    owner: "Developer",
    assignedTo: "Batman",
    createdAt: "2020-01-01:12:00:00",
    editedAt: "2020-01-01:12:00:00",
    closedAt: "2020-01-01:12:00:00",
    state: "Open",
    priority: 1,
    comments: [
        {
            author: "Spiderman",
            message: "BATMAN!!! PLEASE HELP MEE!!!!! THERE ARE BUGS EVERYWHERE",
            createdAt: "2020-01-01:12:00:00",
            type: 'some chaotic guy',
        },
    ],
    closeReason: "bugs are fixed",
    references: [
        {
            type: "github",
            url: "",
            issueNumber: 1
        }
    ]
};
const report3 = {
    category: "Question",
    customerId: 1003,
    description: "Spiderman sucks",
    labels: ["label1", "label2"],
    owner: "Batman",
    assignedTo: "Superman",
    createdAt: "2020-01-01:12:00:00",
    editedAt: "2020-01-01:12:00:00",
    closedAt: "2020-01-01:12:00:00",
    state: "Open",
    priority: 1,
    comments: [
        {
            author: "Batman",
            message: "Please fire Spiderman. He sucks as hell!",
            createdAt: "2020-01-01:12:00:00",
            type: 'developer',
        },
    ],
    closeReason: "Youll know it!",
    references: [
        {
            type: "github",
            url: "",
            issueNumber: 1
        }
    ]
};



createCustomer (customer1);
createCustomer (customer2);
createCustomer (customer3);

createReport(report1);
createReport(report2);
createReport(report3);

console.log(exportAllCustomer());
console.log(exportAllReports());