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
