import { validCommands } from '@/constants/commands'
import type { Command } from '@/types/command'

/**
 * Error response component props
 *
 * @param command - The invalid command
 */
interface ErrorResponseProps {
    command: Command
}

const ErrorResponse = ({ command }: ErrorResponseProps) => {
    const { name, args } = command
    const commandInfo = validCommands[name]

    if (!commandInfo) {
        return <div>{`${name}: command not found, type 'help' for supported commands`}</div>
    }

    if (name === 'cat' && !commandInfo.validArgs.includes(args[0])) {
        return <div>{`${name}: ${args[0]}: no such file or directory`}</div>
    }

    if (args.length < commandInfo.numArgs) {
        return <div>{`${name}: missing operand, type 'help' for supported commands`}</div>
    }

    if (args.length > commandInfo.numArgs) {
        return <div>{`${name}: extra operand '${args[commandInfo.numArgs]}', type 'help' for supported commands`}</div>
    }

    if (name === 'theme' && !commandInfo.validArgs.includes(args[0])) {
        return <div>{`${name}: ${args[0]}: theme not supported`}</div>
    }

    const invalidArg = args.find((arg) => !commandInfo.validArgs.includes(arg))
    if (invalidArg) {
        return <div>{`${name}: ${invalidArg}: no such file or directory`}</div>
    }

    return null
}

export default ErrorResponse
