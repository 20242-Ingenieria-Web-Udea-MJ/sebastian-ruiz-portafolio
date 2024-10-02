interface ParagraphProps {
    label: string;
    content: string;
}

export default function Paragraph({ label, content }: ParagraphProps) {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <h2 className="pt-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-4">
                {label}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-4">
                {content}
            </p>
        </div>
    );
}