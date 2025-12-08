import Image from "next/image";
import marketingImage from "../../assets/marketing.png";
import { GiSkills } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiMoney } from "react-icons/bi";
const index = () => {
  return (
    <div className="mt-20 px-5">
      <div className="flex flex-col  justify-center gap-2 items-center-safe">
        <h1 className="text-4xl">The dream team of digital marketing</h1>
        <p>We help bussiness grow online</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
        <span>
          <h1 className="font-semibold">About Us</h1>
          <p className="text-sm">
            At Nexsoll, our mission is to empower businesses through smart,
            scalable, and sustainable solutions that drive real impact. We aim
            to be a trusted partner in innovation—helping our clients harness
            the power of technology and strategy to unlock new possibilities,
            overcome complex challenges, and accelerate growth. We are dedicated
            to delivering excellence with every project, fostering long-term
            relationships built on trust, transparency, and shared success. By
            combining deep expertise with forward-thinking approaches, we strive
            to create value not just for today, but for the future. We believe
            in innovation with purpose, technology with integrity, and solutions
            that scale as our clients grow. Our team is committed to continuous
            learning, agile execution, and delivering measurable outcomes.
            Through collaboration and creativity, we aim to redefine what’s
            possible—one solution at a time.
          </p>
        </span>
        <span>
          <Image
            className="rounded-b-4xl"
            quality={40}
            src={marketingImage}
            alt="Marketing image"
          />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
        <span>
          <Image
            className="rounded-b-4xl"
            quality={40}
            src={marketingImage}
            alt="Marketing image"
          />
        </span>
        <span>
          <h1 className="font-semibold">Our Mission</h1>
          <p className="text-sm">
            At Nexsoll, our mission is to empower businesses through smart,
            scalable, and sustainable solutions that drive real impact. We aim
            to be a trusted partner in innovation—helping our clients harness
            the power of technology and strategy to unlock new possibilities,
            overcome complex challenges, and accelerate growth. We are dedicated
            to delivering excellence with every project, fostering long-term
            relationships built on trust, transparency, and shared success. By
            combining deep expertise with forward-thinking approaches, we strive
            to create value not just for today, but for the future. We believe
            in innovation with purpose, technology with integrity, and solutions
            that scale as our clients grow. Our team is committed to continuous
            learning, agile execution, and delivering measurable outcomes.
            Through collaboration and creativity, we aim to redefine what’s
            possible—one solution at a time.
          </p>
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 justify-between sm:grid-cols-2">
        <span className="grid gap-3">
          <h1 className="font-semibold">Why Choose Us</h1>
          <p className="text-sm">
            Top-quality internet growth services that won’t break the bank. We
            deliver quick results, so you can focus on what matters—growing your
            business!
          </p>
          <Image width={500} quality={40} className="rounded-3xl mt-3" src={marketingImage} alt="why-choose us" />
        </span>
        <span className="grid gap-2">
          <span className="px-6 flex flex-col gap-1 rounded-2xl py-4 bg-gray-900">
            <GiSkills size={30} />
            <h1 className="font-semibold">Highlight Unique Selling Points</h1>
            <p className="text-sm">
              Focus on what sets the business apart, such as years of
              experience, industry awards, specialized skills, or a unique
              approach to problem-solving.
            </p>
          </span>
          <span className="px-6 flex flex-col gap-1 rounded-2xl py-4 bg-gray-900">
            <GrTransaction size={30} />
            <h1 className="font-semibold">Highlight Unique Selling Points</h1>
            <p className="text-sm">
              Focus on what sets the business apart, such as years of
              experience, industry awards, specialized skills, or a unique
              approach to problem-solving.
            </p>
          </span>
          <span className="px-6 flex flex-col gap-1 rounded-2xl py-4 bg-gray-900">
            <BiMoney size={30} />
            <h1 className="font-semibold">Highlight Unique Selling Points</h1>
            <p className="text-sm">
              Focus on what sets the business apart, such as years of
              experience, industry awards, specialized skills, or a unique
              approach to problem-solving.
            </p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default index;
