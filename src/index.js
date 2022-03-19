const { Classeviva } = require('classeviva.js');
const inquirer = require('inquirer');
const colors = require('colors');
const { categories } = require('./costants');
const { grades } = require('./commands/grades');
const { subjects } = require('./commands/subjects');
const { absences } = require('./commands/absences');
const { notes } = require('./commands/notes');
const { ui } = require('./ui/ui');

colors.enable();


const program = async () => {
    try {
        await console.clear();
        let username = await login_username();
        let pw = await login_pw();
        const cv = new Classeviva(username, pw);
        cv.login();
        await console.clear();
        let command = await chooseCommands();
        let votes = '';
        await execCommand(cv, command);
        
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


   const execCommand = async (cv, command) => {
    switch(command) {
        case 'Voti':
            await grades(cv, command);
            /*setTimeout(async function() {
                chooseCommands();
                await execCommand(cv, command);
            }, 2000);*/
        break;
        case 'Materie':
            await subjects(cv, command);
            /*setTimeout(async function() {
                chooseCommands();
                await execCommand(cv, command);
            }, 2000);*/
        break;
        case 'Assenze':
            await absences(cv, command);
            /*setTimeout(async function() {
                chooseCommands();
                await execCommand(cv, command);
            }, 2000);*/
        break;
        case 'Note':
            await notes(cv, command);
        break;
        case 'GUI': 
            await ui();
        default: 
            console.log('error');
        break;
    }
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

module.exports = { program };