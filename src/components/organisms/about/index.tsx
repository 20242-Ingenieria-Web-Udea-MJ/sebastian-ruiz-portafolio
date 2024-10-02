import InformationTable from "@/components/molecules/informationTable";
import Profile from "@/components/molecules/profile";
import {Separator} from "@/components/ui/separator";
import ProgressionTable from "@/components/molecules/progressionTable";
import SkillsList from "@/components/molecules/skillsList";

export default function About() {
    return (
        <div className="flex flex-col items-center w-full mx-auto gap-6 text-sm pr-6 pl-6 bg-background h-screen overflow-auto" >
            <div className={"h-60 sticky top-0 left-0 z-40 w-full mb-10"}>
                <Profile
                    name="Sebastian Ruiz"
                    description="Senior Web UI Developer"
                />
            </div>
            <div className={"w-full mb-4"}>
                <Separator className="my-2" />
                <InformationTable
                    information={[
                        { label: "Location", content: "Medellin, Antioquia" },
                        { label: "Mail", content: "imsebarz@gmail.com" },
                        ]}
                />
                <Separator className="my-2" />
                <ProgressionTable title={"Languages"} information={[
                    { label: "Spanish", progression: 100, progression_label: "Native" },
                    { label: "English", progression: 85, progression_label: "C1" },
                ]} />
                <Separator className="my-2" />
                <ProgressionTable title={"Programming languages"} information={[
                    { label: "HTML", progression: 100, progression_label: "Advanced" },
                    { label: "CSS", progression: 100, progression_label: "Advanced" },
                    { label: "Javascript/Typescript", progression: 85, progression_label: "Advanced" },
                    { label: "GraphQL", progression: 75, progression_label: "Intermediate" },
                    { label: "Solidity", progression: 50, progression_label: "Intermediate" },
                    { label: "SQL", progression: 75, progression_label: "Intermediate" },
                ]} />
                <Separator className="my-2" />
                <SkillsList title={"Extra Skills"} list={[
                    "Git, Github, CI/CD",
                    "Bash, Terminal, linux",
                    "Agile, Scrum, Kanban",
                    "Wordpress, Shopify, Wix",
                ]} />
                <Separator className="my-2" />
            </div>
        </div>
    );
}
