import { validCommands } from '@/constants/commands'

/**
 * Validates the command and its arguments.
 *
 * @param command - The command to validate.
 * @param args - The arguments to validate.
 * @returns - True if the command and its arguments are valid, false otherwise.
 */
export function validateCommand(command: string, args: string[]): boolean {
    if (!(command in validCommands) || validCommands[command].numArgs !== args.length) {
        return false
    }

    for (const arg of args) {
        if (!validCommands[command].validArgs.includes(arg)) {
            return false
        }
    }

    return true
}
