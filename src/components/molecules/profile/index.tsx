import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const imageLink: string = "https://avatars.githubusercontent.com/imsebarz?v=4";

interface ProfileProps {
    name: string;
    description: string;
}

export default function Profile({ name, description }: ProfileProps) {
    return (
        <div className="flex flex-col items-center xl:p-5 bg-background">
            <Avatar className="w-40 h-40">
                <AvatarImage src={imageLink} alt="@shadcn"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4">
                {name}
            </h3>
            <h2 className="text-xl text-gray-500 mt-2">
                {description}
            </h2>
        </div>
    );
}
