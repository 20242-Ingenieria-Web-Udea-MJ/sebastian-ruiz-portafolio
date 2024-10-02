import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ExperienceItemProps {
  leftTitle: string;
  leftLabel: string;
  date: string;
  rightTitle: string;
  description: string;
}

interface ExperienceListProps {
  list: ExperienceItemProps[];
}

const ExperienceItem = ({ item }: { item: ExperienceItemProps }) => (
  <div className="flex flex-col lg:flex-row w-full justify-between mb-8">
    <div className="lg:w-[50%] w-full mb-4 lg:mb-0">
      <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-4">
        {item.leftTitle}
      </h2>
      <div className="flex justify-between items-center gap-2 pt-4">
        <p className="leading-7 hidden lg:block">{item.leftLabel}</p>
        <Badge className="bg-secondary">{item.date}</Badge>
      </div>
    </div>
    <div className="lg:w-5/12 w-full">
      <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-4">
        {item.rightTitle}
      </h2>
      <p className="leading-7 mt-0 w-full [&:not(:first-child)]:mt-4 text-justify">
        {item.description}
      </p>
    </div>
  </div>
);

export function ExperienceList({ list }: ExperienceListProps) {
  return (
    <Card className="bg-card w-full p-12">
      {list.map((item, index) => (
        <div key={index}>
          <ExperienceItem item={item} />
          {index < list.length - 1 && <Separator className="mt-8 mb-6" />}
        </div>
      ))}
    </Card>
  );
}