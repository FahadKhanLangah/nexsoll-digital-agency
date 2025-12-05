import Card from "@/components/ui/Card";
import socialImg from "../assets/social.png";
import codingImg from "../assets/coding.png";
import marketingImg from "../assets/marketing.png";
import speakerImg from "../assets/speaker.png";
import AnimatedImage from "@/components/ui/AnimatedImage";
export default function Home() {
  return (
    <div className="flex mt-20 flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col sm:flex-row items-center w-full">
        <div className="sm:w-[50%] w-full px-5 sm:px-10">
          <h1 className="sm:text-5xl text-2xl font-bold">
            Transorm Your Ideas with Expert Digital Marketing Services
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem rerum
            commodi dolor alias laboriosam cupiditate qui aut sit, ab, quaerat
            unde dicta ipsam et labore? Soluta nihil suscipit voluptate
            doloribus.
          </p>
        </div>
        <div className=" mb-5">
          <div className="w-full flex justify-between gap-1">
            <AnimatedImage
              img={marketingImg}
              alt="Digital Marketing"
              strings={["Message Us Now", "Grow Your Reach"]}
            />
            <AnimatedImage
              img={socialImg}
              alt="Socialized images"
              strings={["We Handle Everything", "Digital Marketing"]}
            />
          </div>
          <div className="w-full flex justify-between gap-1 items-center">
            <AnimatedImage
              img={codingImg}
              alt="Coding"
              strings={["Websites and App development", "We Handle Everything"]}
            />
            <AnimatedImage
              img={speakerImg}
              alt="Speaker"
              strings={["Message Us Now", "Digital Marketing"]}
            />
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
}
