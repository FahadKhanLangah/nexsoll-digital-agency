import Button from "./Button";

const Card = () => {
  return (
    <div
      className=" sm:px-16
    px-10 py-6 flex flex-col items-center justify-center
  bg-white/10 backdrop-blur-xl 
  border border-white/20 
  shadow-xl rounded-xl
    "
    >
      <h2>Choose Nexsoll Empowering Growth</h2>
      <Button className="mt-3 px-6 text-sm py-3 bg-orange-600">
        View Services
      </Button>
    </div>
  );
};

export default Card;
