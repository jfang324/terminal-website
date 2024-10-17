import { cat } from '@/constants/content'

/**
 * CatResponse component props
 *
 * @param file - The file content to display
 */
interface CatResponseProps {
    file: string
}

const CatResponse = ({ file }: CatResponseProps) => {
    const content = cat[file as keyof typeof cat]

    // displays a vertical list of categories followed by skills for each category
    if (file === 'skills.txt') {
        return (
            <div className="flex flex-col">
                {Object.entries(content).map(([category, values]) => (
                    <div key={category} className="flex flex-row">
                        <div>{`${category}: ${(values as string[]).join(', ')}`}</div>
                    </div>
                ))}
            </div>
        )
    }

    // displays a horizontal list of projects that are links
    if (file === 'projects.txt') {
        return (
            <div className="flex flex-row flex-wrap -m-1">
                {Object.entries(content).map(([project, url]) => (
                    <a
                        href={url as string}
                        key={url as string}
                        className="text-blue-600 hover:text-blue-500 whitespace-nowrap px-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project}
                    </a>
                ))}
            </div>
        )
    }

    // displays a vertical list of contacts followed by their values
    if (file === 'contacts.txt') {
        return (
            <div className="flex flex-col">
                {Object.entries(content).map(([contact, value]) => (
                    <div key={contact} className="flex flex-row">
                        <div>{`${contact}: ${value}`}</div>
                    </div>
                ))}
            </div>
        )
    }

    return null
}

export default CatResponse
