const cli = document.getElementById('cli');
const prompt = 'C:\\Users\\TrustedInstaller>';
const promptLength = prompt.length;

const commands = {
    'help': {
        description: 'Display available commands',
        usage: 'help [command]'
    },
    'echo': {
        description: 'Display a line of text',
        usage: 'echo <text>'
    },
    'clear': {
        description: 'Clear the screen',
        usage: 'clear'
    },
    'date': {
        description: 'Display the current date and time',
        usage: 'date'
    },
    'whoami': {
        description: 'Display current user',
        usage: 'whoami'
    },
    'exit': {
        description: 'Exit the command prompt (DANGEROUS COMMAND)',
        usage: 'exit'
    }
};

function processCommand(command) {
    const args = command.trim().split(/\s+/);
    const cmd = args[0].toLowerCase();

    let output = '';

    switch (cmd) {
        case 'help':
            if (args[1]) {
                const helpCmd = args[1].toLowerCase();
                if (commands[helpCmd]) {
                    output = `${helpCmd}: ${commands[helpCmd].description}\nUsage: ${commands[helpCmd].usage}`;
                } else {
                    output = `'${helpCmd}' is not recognized as an internal or external command.`;
                }
            } else {
                output = 'Available commands:\n\n';
                for (let cmd in commands) {
                    output += `  ${cmd.padEnd(15)} - ${commands[cmd].description}\n`;
                }
            }
            break;

        case 'echo':
            output = args.slice(1).join(' ');
            if (output.length >= 120) {
                output = 'You\'re using a trial version of Command Prompt (Hacker Edition), please buy the full version of this software for $9.99!';
            }
            break;

        case 'clear':
            output = 'Feature locked! To use this feature, please buy the full version of this software for $9.99!';
            return output;

        case 'date':
            output = new Date().toString();
            break;

        case 'whoami':
            output = 'YOUR MOM';
            break;

        case 'exit':
            output = 'Exiting...';
            setTimeout(() => {
                document.getElementById('cli').disabled = true;
                document.getElementById('cli').style.backgroundColor = '#938e8e';
                document.getElementById('cli').style.color = '#75ff75';
                document.getElementById('cli').style.cursor = 'wait';
                document.getElementsByClassName('windows-error-reporting')[0].style.display = 'block';
            }, 1000);

        case '':
            return;

        default:
            output = `'${cmd}' is not recognized as an internal or external command,\noperable program or batch file.`;
    }
    return output;
}
cli.addEventListener('keydown', function (event) {
    const currentLineStart = this.value.lastIndexOf('\n') + 1;
    const promptEnd = currentLineStart + promptLength;
    const selectionStart = this.selectionStart;
    const selectionEnd = this.selectionEnd;

    if (event.key === 'Enter') {
        event.preventDefault();
        const command = this.value.substring(promptEnd).trim();

        const output = processCommand(command);
        if (output) {
            this.value += '\n' + output + '\n' + prompt;
        } else {
            this.value += '\n' + prompt;
        }

        this.setSelectionRange(this.value.length, this.value.length);
    }

    if (event.key === 'Backspace') {
        if (selectionStart <= promptEnd && selectionEnd <= promptEnd) {
            event.preventDefault();
        }
    }

    if (event.key === 'Delete') {
        if (selectionStart < promptEnd) {
            event.preventDefault();
        }
    }
});
cli.addEventListener('click', function () {
    const currentLineStart = this.value.lastIndexOf('\n', this.selectionStart - 1) + 1;
    const promptEnd = currentLineStart + promptLength;

    if (this.selectionStart < promptEnd) {
        this.setSelectionRange(promptEnd, promptEnd);
    }
});

cli.addEventListener('keyup', function () {
    const currentLineStart = this.value.lastIndexOf('\n', this.selectionStart - 1) + 1;
    const promptEnd = currentLineStart + promptLength;

    if (this.selectionStart < promptEnd) {
        this.setSelectionRange(promptEnd, promptEnd);
    }
});

cli.addEventListener('input', function () {
    const lines = this.value.split('\n');
    const lastLine = lines[lines.length - 1];

    if (!lastLine.startsWith(prompt)) {
        if (lastLine.length < promptLength) {
            lines[lines.length - 1] = prompt;
        } else {
            lines[lines.length - 1] = prompt + lastLine.substring(promptLength);
        }
        this.value = lines.join('\n');
    }
    this.setSelectionRange(this.value.length, this.value.length);
});

cli.value = prompt;