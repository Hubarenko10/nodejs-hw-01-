const fs = require("fs");
const path = require("path");

const contactPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
try {
const data = await fs.promises.readFile(contactPath, "utf-8");
const contacts = JSON.parse(data);
console.table(contacts);
} catch (err) {
console.error(err);
}
}

async function getContactsById(contactId) {
try {
const data = await fs.promises.readFile(contactPath, "utf-8");
const contacts = JSON.parse(data);
const contact = contacts.find(({ id }) => id === contactId);
console.table(contact);
} catch (err) {
console.error(err);
}
}

async function removeContact(contactId) {
try {
const data = await fs.promises.readFile(contactPath, "utf-8");
const contacts = JSON.parse(data);
const updatedContact = contacts.filter(({ id }) => id !== contactId);
await fs.promises.writeFile(
contactPath,
JSON.stringify(updatedContact)
);
console.table(`Contact with ID:${contactId} has been removed`);
} catch (err) {
console.error(err);
}
}

async function addContact(name, email, phone) {
try {
const data = await fs.promises.readFile(contactPath, "utf-8");
const contacts = JSON.parse(data);
const newContact = { id: Date.now(), name, phone, email };
const updateContact = [...contacts, newContact];
await fs.promises.writeFile(
contactPath,
JSON.stringify(updateContact)
);
console.table(`${name} has been added to contacts`);
} catch (err) {
console.error(err);
}
}

module.exports = { listContacts, getContactsById, removeContact, addContact };