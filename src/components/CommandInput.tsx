'use client'
import { prompt } from '@/constants/content'
import { useCommandInput } from '@/hooks/useCommandInput'

/**
 * Command input component props
 *
 * @param inputRef - Reference to the input element
 * @param processCommand - Function to process the command
 */
interface CommandInputProps {
    inputRef: React.RefObject<HTMLInputElement>
    processCommand: (command: string) => void
}

const CommandInput = ({ inputRef, processCommand }: CommandInputProps) => {
    const { command, isFocused, setIsFocused, handleKeyDown, handleChange } = useCommandInput(processCommand)

    return (
        <div className="w-full overflow-x-hidden flex flex-col">
            <div className="text-wrap">
                {`${prompt}${command}`}
                <span
                    className={`inline-block ${isFocused ? 'animate-blink' : ''}`}
                    style={{
                        backgroundColor: isFocused ? 'var(--cursor-color)' : 'transparent',
                        color: isFocused ? 'var(--cursor-color)' : 'transparent',
                    }}
                >
                    &nbsp;
                </span>
            </div>
            <input
                type="text"
                spellCheck={false}
                ref={inputRef}
                value={command}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="opacity-0 absolute"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )
}

export default CommandInput
