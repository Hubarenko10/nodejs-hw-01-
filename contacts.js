const fs = require("fs");
const path = require("path");


const contactPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    console.table(contacts);
  });
}

function getContactsById(contactId) {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    const contact = contacts.find(({ id }) => id === contactId);
    console.table(contact);
  });
}

function removeContact(contactId) {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data);
    const updatedContact = contacts.filter(({ id }) => id !== contactId);
    fs.writeFile(contactPath, JSON.stringify(updatedContact), (err) => {
      if (err) throw err;
      console.table(`Contact with ID:${contactId} has been removed`);
    });
  });
}
function addContact(name, email, phone) {
  fs.readFile(contactPath, "utf-8", (err, data) => {
    if (err) throw err;
    contacts = JSON.parse(data);
    const newContact = { id: Date.now(), name, phone, email };
    const updateContact = [...contacts, newContact];
    fs.writeFile(contactPath, JSON.stringify(updateContact), (err) => {
      if (err) throw err;
      console.table(`${name} has been added to contacts`);
    });
  });
}
module.exports = { listContacts, getContactsById, removeContact, addContact };

