import chalk from 'chalk';

export default {
    name: 'ready',
    run: async (client) => {
        console.log(chalk.bgGreen(` [Bot] `) + chalk.green(' ready logged in as :: ' + client.user.username));
    }
};