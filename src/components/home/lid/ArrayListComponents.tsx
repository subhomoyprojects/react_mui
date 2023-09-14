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

interface FeatureCompetition {
  img: string;
  title: string;
  package: number;
  announcement: string;
  tag: string[];
}

export const featureCompetition: FeatureCompetition[] = [
  {
    img: assets.pro1,
    title: "4 Nights In Iceland Holiday",
    package: 2.99,
    announcement: "Live draw tonight 10PM",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro2,
    title: "2016 Volkswagen Golf GTD Auto + €3,000 Cash",
    package: 16.0,
    announcement: "",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro3,
    title: "Gran Canaria Radisson Winter Getaway",
    package: 8.0,
    announcement: "",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro4,
    title: "High Roller €1,300 Cash",
    package: 8.0,
    announcement: "Live draw tonight 10PM",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro5,
    title: "High Roller Fridays Macbook Air M1 Chip",
    package: 20.0,
    announcement: "Live draw tonight 10PM",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro6,
    title: "High Roller €400 Cash",
    package: 15.0,
    announcement: "",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro7,
    title: "5 Star Krakow Poland Getaway",
    package: 22.0,
    announcement: "",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro8,
    title: "4 Nights In Iceland Holiday",
    package: 2.99,
    announcement: "Live draw tonight 10PM",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
];
