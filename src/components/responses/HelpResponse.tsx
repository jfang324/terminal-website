import { validCommands } from '@/constants/commands'

// displays all commands and their descriptions in a vertical list
const HelpResponse = () => (
    <div className="flex flex-col">
        {Object.entries(validCommands).map(([name, command]) => (
            <div key={name}>{`${name} — ${command.description}`}</div>
        ))}
    </div>
)

export default HelpResponse
