import assets from "../../../assets";
import { Redeem, TaskAlt, Mic, EmojiEvents, AttachMoney } from "@mui/icons-material";

export const paymentMethodIcon: string[] = [assets.applePay, assets.googlePay, assets.visa, assets.masterCard];
export const howToPlayArray = [
  {
    icon: <Redeem />,
    content: "Select prize(s) and amount of entries",
  },
  {
    icon: <TaskAlt />,
    content: "Answer the question correctly ",
  },
  {
    icon: <Mic />,
    content: "Winner announced on Live Draw",
  },
];
export const awardWinContentArray = [
  {
    icon: <EmojiEvents />,
    title: "2000+",
    subTitle: "Winners",
  },
  {
    icon: <Redeem />,
    title: "€30,921,287",
    subTitle: "Prizes won so far",
  },
  {
    icon: <AttachMoney />,
    title: "€20,921",
    subTitle: "Donated to Charity",
  },
];
type WinnerCard = {
  image: string;
  title: string;
};
export const winnerCard: WinnerCard[] = [
  {
    image: assets.winner1,
    title: "Winner: Paul King – Range Rover + Audi Double Bubble – Ticket: No.A21",
  },
  {
    image: assets.winner2,
    title: "Winner: Deborah Melaney – BMW 320D M-Sport – Ticket: No.H94",
  },
  {
    image: assets.winner3,
    title: "Winner: Ben Hogan – High Roller PS5 Kegerator Bundle – Ticket: 82",
  },
  {
    image: assets.winner3,
    title: "Winner: Ben Hogan – High Roller PS5 Kegerator Bundle – Ticket: 82",
  },
];
type Testimonial = {
  image: string;
  name: string;
  designation: string;
  content: string;
};
export const testimonials: Testimonial[] = [
  {
    image: assets.testimonials1,
    name: "Nicole Dolan",
    designation: "Co.Cavan",
    content: "Unreal company, paid €22 to enter a competition and won an S line Audi A3😍 I was contacted straight away and had the car two days later!! ...",
  },
  {
    image: assets.testimonials2,
    name: "Michelle O'mahony",
    designation: "Co.limerck",
    content: "I just collected my audi tt today. Feel so privileged to have won this on ooosch giveaways for 20euro. What a raffle site give this page a like. ...",
  },
  {
    image: assets.testimonials3,
    name: "John Kinsella",
    designation: "Co.cavan",
    content: " I won a fantastic 2 night stay in the Europe Hotel, with €500 cash. Ooosch and Mick are very professional and couldn't do enough for me. I will be definitely entering more competitions with Ooosch. Thanks Lads 😀",
  },
  {
    image: assets.testimonials3,
    name: "John Kinsella",
    designation: "Co.cavan",
    content: " I won a fantastic 2 night stay in the Europe Hotel, with €500 cash. Ooosch and Mick are very professional and couldn't do enough for me. I will be definitely entering more competitions with Ooosch. Thanks Lads 😀",
  },
];
