import About from "@/components/organisms/about";
import Links from "@/components/organisms/links";
import Header from "@/components/molecules/header";
import Body from "@/components/organisms/body";
import MobileNavBar from "@/components/molecules/mobileNavBar";


export default function Home() {
  return (
      <main>
          <MobileNavBar/>
          <div className={"flex w-screen"}>
              <div className="fixed w-[20%] top-0 left-0 hidden xl:block">
                  <About/>
              </div>
              <div className="xl:w-[75%] w-full bg-background pr-10 pl-10 xl:ml-[20%]">
                  <Header/>
                  <Body/>
              </div>
              <div className="fixed hidden xl:block xl:w-[5%] h-screen top-0 right-0">
                  <Links/>
              </div>
          </div>
      </main>
)
    ;
}
