const Manager = require("../lib/Manager");


describe('officeNumberTest', () => {
    it('Can create an office number.', () => {
        const testOfficeNumber = 6;
        const employee = new Manager('Mona', 2, 'missermona@gmail.com', testOfficeNumber);

        expect(employee.officeNumber).toBe(testOfficeNumber);
    })
})

describe('officeNumberTestTwo', () => {
    it('Testing officeNumber will return office number.', () => {
        const testOfficeNumber = 6;
        const employee = new Manager('Mona', 2, 'missermona@gmail.com', testOfficeNumber);

        expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
    })
})



describe('getRoleTest', () => {
    it('Can get role through getRole method', () => {
        const returnValue = 'Manager';
        const employee = new Manager('Mona', 2, 'missermona@gmail.com', 6);

        expect(employee.getRole()).toBe(returnValue);
    })
})