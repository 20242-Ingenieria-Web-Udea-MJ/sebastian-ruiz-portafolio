import {Icon} from "@iconify/react";
import Link from "next/link";

interface SocialMediaLinkProps {
    iconName: string;
    link: string;
}

export default function RoundedLinkButton({iconName, link}: SocialMediaLinkProps) {
    return (
        <Link href={link} target="_blank">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Icon icon={iconName} className="w-6 h-6 text-white"/>
            </div>
        </Link>
    );
}