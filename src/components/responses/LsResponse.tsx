import { validCommands } from '@/constants/commands'

// displays all 'files' that can be cat'd in a horizontal list
const LsResponse = () => (
    <div className="flex flex-row space-x-2">
        {validCommands['cat'].validArgs.map((file: string) => (
            <div key={file}>{file}</div>
        ))}
    </div>
)

export default LsResponse
