import { readdirSync } from 'fs';
import chalk from 'chalk';

const commands = (client) => {
    readdirSync('./commands').forEach((folder) => {
        readdirSync('./commands/' + folder).filter((file) => file.endsWith('.js')).forEach((command) => {
            import('../../commands/' + folder + '/' + command).then((cmd) => {
                cmd = cmd.default;
                if (!cmd.run) return console.log(chalk.bgRed(` [Command] `) + chalk.red(` unable to load :: ${command}`));
                cmd.name = cmd.name || command.replace('.js', '');
                cmd.category = cmd.category || folder;
                console.log(chalk.bgGreen(` [Command] `) + chalk.green(` successfully loaded :: ${command}`));
                client.commands.set(cmd.name, cmd);
                if (cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach((alias) => client.aliases.set(alias, cmd.name));
            });
        });
    });
}

export default commands;