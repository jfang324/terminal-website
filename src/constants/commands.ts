interface CommandInfo {
    description: string
    numArgs: number
    validArgs: string[]
}

export const validCommands: Record<string, CommandInfo> = {
    whoami: {
        description: "a short descriptions about who I am what I know and what I've done",
        numArgs: 0,
        validArgs: [],
    },
    ls: {
        description: 'list files and directories in the current directory',
        numArgs: 0,
        validArgs: [],
    },
    cat: {
        description: 'print the contents of the file',
        numArgs: 1,
        validArgs: ['skills.txt', 'projects.txt', 'contacts.txt'],
    },
    help: {
        description: 'list supported commands with a short description',
        numArgs: 0,
        validArgs: [],
    },
    clear: {
        description: 'clear terminal history',
        numArgs: 0,
        validArgs: [],
    },
    theme: {
        description: 'set the theme of the terminal',
        numArgs: 1,
        validArgs: ['dark', 'light', 'valorant'],
    },
}
