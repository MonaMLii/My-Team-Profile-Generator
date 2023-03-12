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
        <div class="card" style="width: 22rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name} 
            Intern</h5>
            <ul>
                <li>ID: 
                ${this.id}
                </li>
                <li>Email Address: 
                <a href="mailto: ${this.email}">${this.email}</a>
                </li>
                <li>School: 
                ${this.school}
                </li>
            </ul>
        </div>
        </div>
        `
    }

}

module.exports = Intern;