const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }

    getHTML() {
        return `
        <div class="card" style="width: 22rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}
            Manager</h5>
            <ul>
                <li>
                ID: ${this.id}
                </li>
                <li>Email Address: 
                <a href="mailto: ${this.email}">${this.email}</a>
                </li>
                <li>Office Number
                ${this.officeNumber}
                </li>
            </ul>
        </div>
        </div>
        `
    }
}

module.exports = Manager;