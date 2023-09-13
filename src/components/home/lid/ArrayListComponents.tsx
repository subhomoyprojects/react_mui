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
