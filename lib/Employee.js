class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
    
    getHTML() {
        return `
        <div class="card" style="width: 22rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <ul>
                <li>ID: 
                ${this.id}
                </li>
                <li>Email Address: 
                <a href="mailto: ${this.email}">${this.email}</a>
                </li>
            </ul>
        </div>
        </div>
        `
    }

}



module.exports = Employee;