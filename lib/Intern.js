const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }

    getHTML() {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <ul>
                <li>My ID: 
                ${this.id}
                </li>
                <li>My Email Address: 
                <a href="${this.email}"></a>
                </li>
                <li>My School: 
                ${this.school}
                </li>
            </ul>
        </div>
        </div>
        `
    }

}

module.exports = Intern;