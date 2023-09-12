import { Button } from "@mui/material";
import "./BtnStyle.css";
import { useState } from "react";

export default function BtnComponent(props: any) {
  const [state] = useState(props.flag);
  return <Button className={`commonButton ${state ? "transparentButton" : ""}`}>{props.text}</Button>;
}
