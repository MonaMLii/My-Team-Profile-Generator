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
            </ul>
        </div>
        </div>
        `
    }

}



module.exports = Employee;