const { Classeviva } = require('classeviva.js');
const inquirer = require('inquirer');
const colors = require('colors');
const { categories } = require('./costants');
const { grades } = require('./commands/grades');
const { subjects } = require('./commands/subjects');
const { absences } = require('./commands/absences');

colors.enable();


const program = async () => {
    try {
        let username = await login_username();
        let pw = await login_pw();
        const cv = new Classeviva(username, pw);
        cv.login();
        let command = await chooseCommands();
        let votes = '';

        switch(command) {
            case 'Voti':
                await grades(cv, command);
            break;
            case 'Materie':
                await subjects(cv, command);
            break;
            case 'Assenze':
                await absences(cv, command);
            break;
            default: 
                console.log('error');
            break;
        }
    } catch(error) {
        console.log(colors.bgRed.white(' ERROR ') + " " + error);
    }
}

  /**
 * @method login_username
 * @description Log in into account.
 */
   const login_username = async () => {
        const { login_username } = await inquirer.prompt([
            {
                type: 'input',
                name: 'login_username',
                message: 'Nome utente: '
            },
        ])

        return login_username;
   };


     /**
 * @method login_pw
 * @description Log in into account.
 */
      const login_pw = async () => {
        const { login_pw } = await inquirer.prompt([
            {
                type: 'password',
                name: 'login_pw',
                message: 'Password: '
            }
        ])

            return login_pw;
        };

/**
 * @method chooseCommand
 * @description Choose a command.
 */
   const chooseCommands = async () => {
    const { chooseCommands } = await inquirer.prompt([
      {
        type: "list",
        name: "chooseCommands",
        message: "Dove vuoi andare?",
        choices: [...categories, new inquirer.Separator()],
      },
    ]);
  
    return chooseCommands;
  };

program();

module.export = { program };