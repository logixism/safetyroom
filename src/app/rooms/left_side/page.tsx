import { Arrow, ArrowProps } from "@/components/Arrow";
import { PulsingCircle, PulsingCircleProps } from "@/components/PulsingCircle";
import Images from "@/components/Images";

const arrows: ArrowProps[] = [
  {
    direction: "right",
    text: "Подивитися праворуч",
    href: "/rooms/entrance",
    directionPercentage: 5,
    top: 50,
  },
];

const circles: PulsingCircleProps[] = [
  {
    image: "../assets/hires/signs/premedical_help.png",
    text: "Домедична допомога",
    top: 24.5,
    left: 13.5,
  },
  {
    image: "../assets/hires/signs/premedical_booklet_1.png",
    text: "Перший буклет",
    top: 55.5,
    left: 6.2,
    radius: 5,
  },
  {
    image: "../assets/hires/signs/premedical_booklet_2.png",
    text: "Другий буклет",
    top: 55.5,
    left: 13.7,
    radius: 5,
  },
  {
    image: "../assets/hires/signs/premedical_booklet_3.png",
    text: "Третій буклет",
    top: 55.5,
    left: 21.1,
    radius: 5,
  },

  {
    image: "../assets/hires/signs/psychological_relief.png",
    text: "Психологічні розвантаження",
    top: 25,
    left: 48.6,
  },
  {
    image: "../assets/hires/signs/psychological_booklet_1.png",
    text: "Перший буклет",
    top: 55.5,
    left: 42.4,
    radius: 5,
  },
  {
    image: "../assets/hires/signs/psychological_booklet_2.png",
    text: "Другий буклет",
    top: 55.5,
    left: 51.5,
    radius: 5,
  },

  {
    image: "../assets/hires/signs/mine_safety.png",
    text: "Мінна безпека",
    top: 26,
    left: 83.7,
  },
  {
    image: "../assets/hires/signs/mine_booklet.png",
    text: "Буклет",
    top: 55.5,
    left: 82,
    radius: 5,
  },
];

const FrontPage = () => {
  return (
    <>
      <Images room="left_side" />
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
