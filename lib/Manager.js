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
            <h5 class="card-title">${this.name}</h5>
            <ul>
                <li>
                ${this.id}
                </li>
                <li>
                <a>${this.email}</a>
                </li>
                <li>
                ${this.officeNumber}
                </li>
            </ul>
        </div>
        </div>
        `
    }
}

module.exports = Manager;