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
            <h5 class="card-title">Name: ${this.name}</h5>
            <ul>
                <li>My ID: 
                ${this.id}
                </li>
                <li>My Email Address: 
                <a href="${this.email}"></a>
                </li>
                <li>My GitHub Username:
                ${this.github}
                </li>
            </ul>
        </div>
        </div>
        `
    }

}

module.exports = Engineer;