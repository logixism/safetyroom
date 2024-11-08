import { Arrow, ArrowProps } from "@/components/Arrow";
import { PulsingCircle, PulsingCircleProps } from "@/components/PulsingCircle";
import Images from "@/components/Images";

const arrows: ArrowProps[] = [
  {
    direction: "left",
    text: "Подивитися вліво",
    href: "/rooms/left_side",
    directionPercentage: 5,
    top: 50,
  },
];

const circles: PulsingCircleProps[] = [
  {
    image: "../assets/hires/signs/mine_safety.png",
    text: "Пожежна безпека",
    top: 31,
    left: 32.3,
  },
  {
    image: "/products/jeep",
    text: "Безпека життєдіяльності",
    top: 31.5,
    left: 68.5,
  },
];

const FrontPage = () => {
  return (
    <>
      <Images room="entrance" />
      <div className="absolute w-full h-full top-0 left-0">
        {arrows.map((arrow, i) => (
          <Arrow key={i} {...arrow} />
        ))}

        {circles.map((circle, i) => (
          <PulsingCircle key={i} {...circle} />
        ))}
      </div>
    </>
  );
};

export default FrontPage;
