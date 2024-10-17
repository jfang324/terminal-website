import { useState } from 'react'

/**
 * Hook to manage the state of the command input
 * @param processCommand - Function to process the command
 */
export const useCommandInput = (processCommand: (command: string) => void) => {
    const [command, setCommand] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            processCommand(command)
            setCommand('')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(e.target.value)
    }

    return {
        command,
        isFocused,
        setIsFocused,
        handleKeyDown,
        handleChange,
    }
}
