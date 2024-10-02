import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const buttonLink: string =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2C8Y7dnVKJ8JSe_WqNqglPVF9-VsUqhKntuCKOs6GurNE6JEsmomse9LzgX1BWAfO4fUzWKzK9";
const profilePicture: string = "https://avatars.githubusercontent.com/imsebarz?v=4";

export default function Header() {
  return (
    <div className="w-full p-12 pt-0 lg:pt-12 bg-background">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Image
            src={profilePicture}
            alt="Profile Picture"
            className="rounded-full w-48 h-48 object-cover"
            width={192}
            height={192}
          />
        </div>
        <div className="w-full lg:w-2/3 lg:pl-12">
          <h3 className="text-md font-normal mt-4">
            👋 Hi there! My name is
          </h3>
          <h1 className="text-4xl font-semibold mt-4">Sebastian Ruiz</h1>
          <h2 className="text-2xl text-gray-500 mt-2">
            I <del>break</del> build things for the web
          </h2>
          <p className="text-lg mt-4">Senior Web UI Developer at Globant</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className={"text-lg mt-6 h-12"}>
                <Icon icon={"akar-icons:schedule"} className={"mr-2"} />
                Schedule a meeting
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-background min-w-[1000px] min-h-[600px]">
              <DialogHeader>
                <DialogTitle>Schedule a meeting</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <iframe
                  src={buttonLink}
                  width={"950px"}
                  height={"500px"}
                  allowFullScreen
                  title="Embedded Page"
                ></iframe>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}