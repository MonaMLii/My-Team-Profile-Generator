const Engineer = require('../lib/Engineer');

describe('githubTest', () => {
    it('Can create a github.', () => {
        const testGithub = 'MonaMLii';
        const employee = new Engineer('Mona', 2, 'missermona@gmail.com', testGithub);

        expect(employee.github).toBe(testGithub);
    })
})

describe('githubTest', () => {
    it('Testing getGithub will return github username.', () => {
        const testGithub = 'MonaMLii';
        const employee = new Engineer('Mona', 2, 'missermona@gmail.com', testGithub);

        expect(employee.github).toBe(testGithub);
    })
})

describe('getRoleTest', () => {
    it('Can get role through getRole method', () => {
        const returnValue = 'Engineer';
        const employee = new Engineer('Mona', 2, 'missermona@gmail.com', 'MonaMLii');

        expect(employee.getRole()).toBe(returnValue);
    })
})