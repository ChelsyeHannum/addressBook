"use strict";

class AddressBook {
    constructor(contacts) {
        this.contacts = [];
    };


    add() {

        let contactName = document.getElementById("name");
        let contactEmail = document.getElementById("email");
        let contactPhone = document.getElementById("phone");
        let contactRelation = document.getElementById("relation");

        let index = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: contactPhone.value,
            relation: contactRelation.value
        }



        const contactsHolder = document.getElementById("contacts-holder");
        const newContact = document.createElement("section");
        newContact.className = "contact";


        const deleteButton = document.createElement("button")
        deleteButton.className = "material-icons delete";
        deleteButton.id = index.name;
        deleteButton.innerText = "delete";
        deleteButton.onclick = book.deleteAt;
        index;
        deleteButton.type = "button";


        newContact.id = "contact" + deleteButton.id;


        newContact.innerHTML = "Name: " + index.name +
            "<br>Email: " + index.email +
            "<br>Phone: " + index.phone +
            "<br>Relation: " + index.relation;
        contactsHolder.appendChild(newContact);
        newContact.appendChild(deleteButton);

        let newPerson = new Contact(index.name, index.email, index.phone, index.relation);
        this.contacts.push(newPerson);

        counter++;
        this.display();
    }

    deleteAt(index) {
        let position1 = this.id;
        let position = book.contacts.indexOf(position1);
        book.contacts.splice(position, 1);

        book.display();

    }
    display() {

    }
}


class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}


const book = new AddressBook();
const addButton = document.getElementById("add-button");