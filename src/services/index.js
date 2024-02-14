import { exportAllCustomer, readCustomer, deleteCustomer } from "./customer.js";
import { createReport, customerReportStatusCheck, exportAllReports, readAllReportsByCustomer, readReports } from "./report.js";
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

// API
fastify.post('/createCustomer', async function handler (request, reply) {
    createCustomer(request.body);
})

fastify.delete("/deleteCustomerByCNR/:id", async function handler(request, reply) {
    deleteCustomer(request.params.id);
});

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

// <--- create customer ---> //
const customer1 = {
    cName : "ersterKunde",
    cNr : 1001,
    cMail : "erster@kunde.com",
    cID : 0
 }

const customer2 = {
    cName : "zweiterKunde",
    cNr : 1002,
    cMail : "zweiter@kunde.com",
    cID : 0
 }

const customer3 = {
    cName : "dritterKunde",
    cNr : 1003,
    cMail : "dritter@kunde.com",
    cID : 0
 }

// <--- create reports ---> //
const report1 = {
    category: "Feeback",
    customerId: 1001,
    title: "This is a description",
    labels: ["label1", "label2"],
    creater: "Product Manager",
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
    title: "wE haVe pRoBlEmS !!!111",
    labels: ["label1", "label2"],
    creater: "Developer",
    assignedTo: "Batman",
    createdAt: "2020-01-01:12:00:00",
    editedAt: "2020-01-01:12:00:00",
    closedAt: "2020-01-01:12:00:00",
    state: "Open",
    priority: 1,
    comments: [
        {
            author: "Spiderman",
            message: "Batman, Apologies once again. I tripped on a banana peel, crashed into the mainframe, and now the city’s traffic lights are disco dancing. Quantum fruit strikes again! Regards, Spider-Man",
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
    customerId: 1002,
    title: "Spiderman sucks",
    labels: ["label1", "label2"],
    creater: "Batman",
    assignedTo: "Superman",
    createdAt: "2020-01-01:12:00:00",
    editedAt: "2020-01-01:12:00:00",
    closedAt: "2020-01-01:12:00:00",
    state: "Open",
    priority: 1,
    comments: [
        {
            author: "Batman",
            message: "Dear Superman, I hope this message finds you well. I regret to inform you that our mutual colleague, Spiderman, has been consistently delivering subpar code. It’s as if he’s weaving a tangled web of inefficiency and bugs. His lack of attention to detail is alarming, and I fear it’s affecting the entire Justice League’s productivity. I propose that we take immediate action. Spiderman should be given a stern warning, followed by a thorough code review. If he fails to improve, I recommend termination. Our mission to protect the world cannot afford such slipshod programming. Let’s discuss this further during our next Justice League meeting. Together, we can ensure that our codebase remains as robust as your invulnerable skin. Best regards, Batman",
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
const report4 = {
    category: "Feeback",
    customerId: 1002,
    title: "Chill Bats",
    labels: ["label1", "label2"],
    creater: "Superman",
    assignedTo: "Batman",
    createdAt: "2020-01-02:12:00:00",
    editedAt: "2020-01-02:12:00:00",
    closedAt: "",
    state: "In Progress",
    priority: 2,
    comments: [
        {
            author: "Superman",
            message: "Calm down. Ive got this. Spider-Man and his... mishap... is now my priority.",
            createdAt: "2020-01-02:12:00:00",
            type: 'solution expert',
        },
    ],
    closeReason: "calm your nerves - this solves the problem",
    references: [
        {
            type: "github",
            url: "",
            issueNumber: 1
        }
    ]
};
const report5 = {
    category: "Feedback",
    customerId: 1002,
    title: "What happend this night?",
    labels: ["label1", "label2"],
    creater: "Superman",
    assignedTo: "Spiderman",
    createdAt: "2020-01-02:12:00:00",
    editedAt: "2020-01-02:12:00:00",
    closedAt: "",
    state: "In Progress",
    priority: 2,
    comments: [
        {
            author: "Superman",
            message: "What have you done this time? Why did one of the core systems show a series of error messages? You need to get this under control. I'm tired of cleaning up your messes. You're supposed to be a hero, not a hacker. Stop messing with things you don't understand.",
            createdAt: "2020-01-02:12:00:00",
            type: 'solution expert',
        },
    ],
    closeReason: "no bugs - no problems - no spidey-worries",
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
createReport(report4);
createReport(report5);

console.log("<--------------exportAllCustomer()------------------>");
console.log(exportAllCustomer());
console.log("<--------------exportAllReports()------------------>");
console.log(exportAllReports());
console.log("<--------------customerReportStatusCheck(1002)------------------>");
console.log(customerReportStatusCheck(1002));

//console.log(readAllReportsByCustomer(1002));
//console.log(readReports(3));
// console.log(readAllReportsByCustomer(1003));