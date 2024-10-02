import {Card} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
interface PortfolioCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

export default function PortfolioCard({image, title, description, link, linkText}: PortfolioCardProps) {
    return (
        <Card className={"w-full"}>
            <Image src={image} alt={"img nuancin site"} width={"800"} height={"800"} className={"mt-6 w-full"}/>
            <div className={"flex flex-col w-full p-6"}>
                <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors mt-1">
                    {title}
                </h2>
                <p className="leading-7 mt-0 w-full [&:not(:first-child)]:mt-4 text-justify">
                    {description}
                </p>
                {link != "" && linkText != "" &&
                    <Link href={link} className={"self-end"} target="_blank">
                        <Button variant="link" className={"text-secondary"}>{linkText} {'>'}</Button>
                    </Link>
                    || <Separator className={"mt-5 mb-5"} />
                }
            </div>
        </Card>
    );
}