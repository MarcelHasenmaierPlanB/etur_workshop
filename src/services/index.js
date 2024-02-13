import { exportAllCustomer, readCustomer, deleteCustomer } from "./customer.js";
import { createCustomer } from "./customer.js";
import { validateID } from "./customer.js";

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



 function randomDelete(){
const randomNumber = Math.floor(Math.random() * 3) + 1 + 1000;
console.log(randomNumber);
 }

 import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/getAllCustomers', async function handler (request, reply) {
    const exportedCustomers = exportAllCustomer();
    return exportedCustomers;
})

fastify.post('/createCustomer', async function handler (request, reply) {
    createCustomer(request.body);
})

// Delete Customer By Id
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

const report1 = {
    id: 1,  //wird automatisch anglegt - lösch die zeile nach dem implementieren der funktion in reports
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

createCustomer (customer1);
createCustomer (customer2);
createCustomer (customer3);
console.log(exportAllCustomer());