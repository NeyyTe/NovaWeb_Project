import { Avatar, AvatarGroup, Button } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import Header from "../header/Header.jsx";
import RevealAnimation from "../revealAnimation/RevealAnimation.jsx";
import Spotlight from "../ui/spotlight/Spotlight.jsx";
function HeroSection({ children }) {
  return (
    <>
      <div className=" w-full h-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] -z-20">
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]"></div> */}

        <Header />
        <Spotlight
          className="-top-40 left-0 md:left-90 md:-top-40"
          fill="white"
        />

        <section className="  w-full  grid grid-cols-1 2xl:grid-cols-2 w-full mx-auto gap-4 items-center">
          <div className=" h-[80vh] hidden 2xl:block">
            <Spline scene="https://prod.spline.design/iv6vLiWEDQbUOuwu/scene.splinecode" />
          </div>

          <div className="  space-y-8 w-8/12 mx-auto my-12 2xl:">
            <RevealAnimation>
              <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 animate-fade-down animate-ease-in-out">
                Où vos idées deviennent une{" "}
                <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-700 inline-block text-transparent bg-clip-text">
                  réalité
                </span>
              </h1>
            </RevealAnimation>

            <RevealAnimation>
              <p className="font-supremeReg  text-lg tracking-wide text-foreground">
                Nous sommes une équipe passionnée de designers et de
                développeurs web, dédiée à créer{" "}
                <b className="text-foreground">
                  des sites web uniques et impactants
                </b>{" "}
                pour nos clients.
              </p>
            </RevealAnimation>

            <RevealAnimation>
              <Button className="text-lg tracking-wide bg-gradient-to-r from-purple-700 to-fuchsia-800 group  ">
                <b className="">Acheter </b>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </Button>
            </RevealAnimation>

            <RevealAnimation>
              <div className="flex items-center">
                <AvatarGroup
                  className="justify-start "
                  max={4}
                  total={272}
                  isBordered
                >
                  <Avatar
                    color="primary"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  />
                  <Avatar
                    color="warning"
                    src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  />
                  <Avatar
                    color="success"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                  <Avatar
                    color="danger"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                </AvatarGroup>
                <ul className="ml-12 list-disc">
                  <li>Plus de 450 clients satisfaits</li>
                </ul>
              </div>
            </RevealAnimation>
          </div>
        </section>
        <RevealAnimation>
          <div className="">{children}</div>
        </RevealAnimation>
      </div>
    </>
  );
}

export default HeroSection;
