import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import PortfolioCard from "@/components/molecules/portfolioCard";

interface PortfolioCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

interface PortfolioProps {
    cards: PortfolioCardProps[];
}

const PortfolioItem = ({ card }: { card: PortfolioCardProps }) => (
    <CarouselItem className="pl-2 md:basis-1/2">
        <PortfolioCard
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
            linkText={card.linkText}
        />
    </CarouselItem>
);

export function Portfolio({ cards }: PortfolioProps) {
    return (
        <Carousel className="w-11/12">
            <CarouselContent className="-ml-1">
                {cards.map((card, index) => (
                    <PortfolioItem key={index} card={card} />
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-secondary text-white" />
            <CarouselNext className="bg-secondary text-white" />
        </Carousel>
    );
}