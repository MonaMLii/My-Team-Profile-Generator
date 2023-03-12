const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const team = [];


// create HTML to generate

const generateHTML = () =>{

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="../src/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>MY TEAM</header>
    <div id="employee-container" class="row">
        ${team.map(employee => employee.getHTML())}
    </div>
</body>
</html>`;
}


// Promt questions and add to new employee

const addManager = () => {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the manager?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
    },
  ]) 
  .then(({name, id, email, officeNumber} ) => {
    const manager = new Manager(name, id, email, officeNumber);
    team.push(manager);
    addNewEmployee();
  });
}
  
const addEngineer = () => {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
  ])
  .then(({name, id, email, github} ) => {
    const engineer = new Engineer(name, id, email, github);
    team.push(engineer);
    addNewEmployee();
  });
}

const addIntern = () => {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is your school name?',
      },
   
    ])
    .then(({name, id, email, school} ) => {
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        addNewEmployee();
      });
  }

  // add new employee function

  const addNewEmployee = () => {
    inquirer 
    .prompt([
       {
        type: 'list',
        name: 'role',
        message: 'What type of Employee to add?',
        choices: ['Engineer', 'Manager', 'Intern', 'Finish Building Team'],
      },
    ])
    .then((answers) => {
        switch (answers.role) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Manager':
                addManager();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                buildTeam();


        }
    });
  } 
const buildTeam = () => {
    const htmlPageContent = generateHTML();

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

addNewEmployee();
