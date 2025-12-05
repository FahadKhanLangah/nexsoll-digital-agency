
import AnimatedImage from '../ui/AnimatedImage'
import socialImg from "../../assets/social.png";
import codingImg from "../../assets/coding.png";
import marketingImg from "../../assets/marketing.png";
import speakerImg from "../../assets/speaker.png";

const Hero = () => {
  return (
   <div className="flex flex-col sm:flex-row items-center w-full">
        <div className="sm:w-[55%] w-full px-5 sm:px-10">
          <h1 className="sm:text-5xl text-3xl font-bold">
            Transorm Your Ideas with Expert Digital Marketing Services
          </h1>
          <p className="my-4 sm:text-lg text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem rerum
            commodi dolor alias laboriosam cupiditate qui aut sit, ab, quaerat
            unde dicta ipsam et labore? Soluta nihil suscipit voluptate
            doloribus.
          </p>
        </div>
        <div className="mb-5">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          <div className="w-full flex sm:flex-row flex-col items-center sm:gap-2 justify-between gap-5"></div>
        </div>
      </div>
  )
}

export default Hero