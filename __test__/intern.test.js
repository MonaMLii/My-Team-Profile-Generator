const Intern = require("../lib/Intern");


describe('schoolTest', () => {
    it('Can create a school.', () => {
        const testSchool = 'UCI';
        const employee = new Intern('Mona', 2, 'missermona@gmail.com', testSchool);

        expect(employee.school).toBe(testSchool);
    })
})

describe('schoolTest', () => {
    it('Testing getSchool will return schhol name.', () => {
        const testSchool = 'UCI';
        const employee = new Intern('Mona', 2, 'missermona@gmail.com', testSchool);

        expect(employee.getSchool()).toBe(testSchool);
    })
})

describe('getRoleTest', () => {
    it('Can get role through getRole method', () => {
        const returnValue = 'Intern';
        const employee = new Intern('Mona', 2, 'missermona@gmail.com', 'UCI');

        expect(employee.getRole()).toBe(returnValue);
    })
})