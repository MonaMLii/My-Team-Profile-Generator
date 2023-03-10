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
                ${this.github}
                </li>
            </ul>
        </div>
        </div>
        `
    }

}

module.exports = Engineer;