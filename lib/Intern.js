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
            <h5 class="card-title">${this.name}</h5>
            <ul>
                <li>
                ${this.id}
                </li>
                <li>
                <a>${this.email}</a>
                </li>
                <li>
                ${this.school}
                </li>
            </ul>
        </div>
        </div>
        `
    }

}

module.exports = Intern;