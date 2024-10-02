import { Icon } from '@iconify/react';

interface InformationTableProps {
    title: string;
    list: string[];
}

export default function SkillsList({ list, title }: InformationTableProps) {
    return (
        <div className="grid gap-3 w-full">
            <h2 className="text-xl font-semibold">{title}</h2>
            <ul className="grid gap-3">
                {list.map((info, index) => (
                    <li key={index} className="flex gap-2 items-center">
                        <Icon icon="ic:baseline-double-arrow" className="w-1/12" />
                        <span className="text-muted-foreground w-11/12">
                            {info}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
