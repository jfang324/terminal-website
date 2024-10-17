'use client'
import CommandInput from '@/components/CommandInput'
import Response from '@/components/Response'
import { validCommands } from '@/constants/commands'
import { welcomeMessage } from '@/constants/content'
import type { Command } from '@/types/command'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

const LandingPage = () => {
    const { setTheme } = useTheme()
    const [commandHistory, setCommandHistory] = useState<Command[]>([])
    const [welcomed, setWelcomed] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    // Focus on the input on initial render
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    // Process the the input into a command
    const processCommand = (input: string) => {
        const [command, ...args] = input.split(' ')

        if (command === 'clear' && args.length === 0) {
            setWelcomed(true)
            setCommandHistory([])
        } else if (command === 'theme' && args.length === 1 && validCommands[command].validArgs.includes(args[0])) {
            setTheme(args[0])
        } else {
            setCommandHistory([...commandHistory, { name: command, args }])
            inputRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div
            data-testid="landing-page"
            className="min-h-screen flex flex-col py-2 px-3"
            onClick={() => inputRef.current?.focus()}
        >
            {!welcomed ? <div data-testid="welcome-message">{welcomeMessage}</div> : null}
            {commandHistory.map((command, index) => (
                <Response key={index} command={command} />
            ))}
            <CommandInput inputRef={inputRef} processCommand={processCommand} />
        </div>
    )
}

export default LandingPage
