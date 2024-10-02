interface Information {
    label: string;
    content: string;
}

interface InformationTableProps {
    information: Information[];
}

export default function InformationTable({ information }: InformationTableProps) {
    return (
        <div className="grid gap-3 w-full">
            <ul className="grid gap-3">
                {information.map((info, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                            {info.label}
                        </span>
                        <span>{info.content}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}