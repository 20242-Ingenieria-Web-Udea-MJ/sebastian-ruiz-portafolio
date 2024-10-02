import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import {Icon} from "@iconify/react";
import About from "@/components/organisms/about";
import {LinksMobile} from "@/components/organisms/links";

export default function MobileNavBar() {
    return (
        <div
            className={"sticky z-40 top-0 right-0 xl:hidden flex bg-background w-full h-16 justify-between items-center pr-6 pl-6"}>
            <Sheet key="left">
                <SheetTrigger asChild>
                    <Icon icon={"mingcute:menu-fill"} className={"text-4xl text-secondary"}/>
                </SheetTrigger>
                <SheetContent className={'bg-background'} side="left">
                    <SheetHeader>
                        <About/>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <LinksMobile/>
        </div>
    )
}