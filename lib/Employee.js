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
        <div class="card" style="width: 25rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <ul>
                <li>My ID: 
                ${this.id}
                </li>
                <li>My Email Address: 
                <a href="${this.email}"></a>
                </li>
            </ul>
        </div>
        </div>
        `
    }

}



module.exports = Employee;