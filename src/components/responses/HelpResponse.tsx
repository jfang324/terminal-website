import { validCommands } from '@/constants/commands'

// displays all commands and their descriptions in a vertical list
const HelpResponse = () => (
    <div className="flex flex-col">
        {Object.entries(validCommands).map(([name, command]) => (
            <div key={name} className="flex flex-row space-x-1">
                <div>{`${name} — ${command.description}`}</div>
            </div>
        ))}
    </div>
)

export default HelpResponse
