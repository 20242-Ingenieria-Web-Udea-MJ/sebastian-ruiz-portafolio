import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {Icon} from "@iconify/react";

interface CardData {
    logo: string;
    title: string;
    subtitle: string;
}

interface GridProps {
    cards: CardData[];
}

export default function Grid ({ cards }: GridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
                <Card key={index} className="flex flex-col items-center p-2">
                    <Icon icon={card.logo} className={"w-24 h-24 mt-4 text-secondary"} />
                    <CardHeader className="flex flex-col mt-0 items-center text-center">
                        <CardTitle className={"text-lg text-center"}>{card.title}</CardTitle>
                        <CardDescription>{card.subtitle}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};