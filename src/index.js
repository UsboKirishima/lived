const { Classeviva } = require('classeviva.js');
const inquirer = require('inquirer');
const colors = require('colors');

colors.enable();


const program = async () => {
    try {
        let username = await login_username();
        let pw = await login_pw();
        const cv = new Classeviva(username, pw);
        cv.login();
        let command = await chooseCommands();

        if(command.toLowerCase().includes('voti')) {
            cv.getGrades().then(grades => {
                grades.forEach(({ 
                    subjectDesc,
                    displayValue,
                    color
                 }) => {
                    console.log(displayValue);
                });
            })
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
    const commands = ['Voti', 'Note', 'Assenze'];
    const { chooseCommands } = await inquirer.prompt([
      {
        type: "list",
        name: "chooseCommands",
        message: "Please select what you want to do",
        choices: [...commands, new inquirer.Separator()],
      },
    ]);
  
    return chooseCommands;
  };

program();

module.export = { program };