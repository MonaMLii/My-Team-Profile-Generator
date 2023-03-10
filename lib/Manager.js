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
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <ul>
                <li>
                My ID: ${this.id}
                </li>
                <li>My Email Address: 
                <a href="${this.email}"></a>
                </li>
                <li>My Office Number
                ${this.officeNumber}
                </li>
            </ul>
        </div>
        </div>
        `
    }
}

module.exports = Manager;