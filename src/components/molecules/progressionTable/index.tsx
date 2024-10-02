"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

interface Information {
    label: string;
    progression: number;
    progression_label?: string;
}

interface InformationTableProps {
    title: string;
    information: Information[];
}

export default function ProgressionTable({ information, title }: InformationTableProps) {
    const [progress, setProgress] = React.useState<number[]>(information.map(() => 0))

    React.useEffect(() => {
        const timers = information.map((_, index) =>
            setTimeout(() => {
                setProgress(prevProgress => {
                    const newProgress = [...prevProgress]
                    newProgress[index] = information[index].progression
                    return newProgress
                })
            }, 500)
        )

        return () => timers.forEach(clearTimeout)
    }, [information])

    return (
        <div className="grid gap-3 w-full">
            <h2 className="text-xl font-semibold">{title}</h2>
            <ul className="grid gap-3">
                {information.map((info, index) => (
                    <li key={index} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                {info.label}
                            </span>
                            <span>
                                {info.progression_label ? info.progression_label : progress[index] + "%"}
                            </span>
                        </div>
                        <Progress value={progress[index]} className="w-full" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
