import ErrorResponse from '@/components/ErrorResponse'
import CatResponse from '@/components/responses/CatResponse'
import HelpResponse from '@/components/responses/HelpResponse'
import LsResponse from '@/components/responses/LsResponse'
import WhoamiResponse from '@/components/responses/WhoamiResponse'
import { prompt } from '@/constants/content'
import { validateCommand } from '@/lib/utils'
import type { Command } from '@/types/command'

/**
 * Response component props
 *
 * @param command - The command to display
 */
interface ResponseProps {
    command: Command
}

const Response = ({ command }: ResponseProps) => {
    if (!validateCommand(command.name, command.args)) {
        return (
            <div className="w-full flex flex-col">
                <div>
                    {prompt} {command.name} {command.args.join(' ')}
                </div>
                <ErrorResponse command={command} />
            </div>
        )
    }

    let response

    switch (command.name) {
        case 'whoami':
            response = <WhoamiResponse />
            break
        case 'ls':
            response = <LsResponse />
            break
        case 'cat':
            response = <CatResponse file={command.args[0]} />
            break
        case 'help':
            response = <HelpResponse />
            break
        default:
            response = <ErrorResponse command={command} />
    }

    return (
        <div className="w-full flex flex-col">
            <div>
                {prompt} {command.name} {command.args.join(' ')}
            </div>
            {response}
        </div>
    )
}

export default Response
