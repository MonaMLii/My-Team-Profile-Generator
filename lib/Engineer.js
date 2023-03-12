const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }

    getHTML() {
        return `
        <div class="card" style="width: 22rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}
            Engineer </h5>
            <ul>
                <li>ID: 
                ${this.id}
                </li>
                <li>Email Address: 
                <a href="mailto: ${this.email}">${this.email}</a>
                </li>
                <li><a href="https://github.com/">GitHub Username:
                ${this.github}</a>
                </li>
            </ul>
        </div>
        </div>
        `
    }

}

module.exports = Engineer;