import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import { Ubuntu_Mono } from 'next/font/google'
import './globals.css'

const ubuntuMono = Ubuntu_Mono({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-ubuntu-mono',
})

export const metadata = {
    title: 'User@Host:~$',
    description: 'A website about me reminiscent of the linux terminal',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/terminalicon.png" type="image/png" />
            </head>
            <body className={`${ubuntuMono.variable} font-mono antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    themes={['light', 'dark', 'valorant']}
                    enableSystem
                >
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}
