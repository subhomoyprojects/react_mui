import assets from "../../../assets";
import { Redeem, TaskAlt, Mic } from "@mui/icons-material";

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
