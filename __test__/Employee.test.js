const Employee = require("../lib/Employee");

describe('employeeObject', () => {
    it('Should create employee object', () => {
        const employee = new Employee();

        expect(typeof(employee)).toBe('object');
    })
})

describe('nameTest', () => {
    it('Testing name.', () => {
        const name = "Mona";
        const employee = new Employee(name);

        expect(employee.name).toBe(name);
    })
})

describe('idTest', () => {
    it('Testing id', () => {
        const id = 2;
        const employee = new Employee("Mona", id);

        expect(employee.id).toBe(id);
    })
})

describe('emailTest', () => {
    it('Testing email', () => {
        const email = 'missermona@gmail.com';
        const employee = new Employee("Mona", 2, email);

        expect(employee.email).toBe(email);
    })
})

describe('getNameTest', () => {
    it('Can get name through getName method', () => {
        const nameTest = 'Mona';
        const employee = new Employee(nameTest);

        expect(employee.getName()).toBe(nameTest);
    })
})

describe('getIdTest', () => {
    it('Can get id through getId method', () => {
        const idTest = 2;
        const employee = new Employee('Mona', idTest);

        expect(employee.getId()).toBe(idTest);
    })
})

describe('getEmailTest', () => {
    it('Can get email through getEmail method', () => {
        const emailTest = 'missermona@gmail.com';
        const employee = new Employee('Mona', 2, emailTest);

        expect(employee.getEmail()).toBe(emailTest);
    })
})

describe('getRoleTest', () => {
    it('Can get role through getRole method', () => {
        const returnValue = 'Employee';
        const employee = new Employee('Mona', 2, 'missermona@gmail.com');

        expect(employee.getRole()).toBe(returnValue);
    })
})




