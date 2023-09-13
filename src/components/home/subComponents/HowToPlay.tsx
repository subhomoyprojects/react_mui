import { ReactElement } from "react";
type Props = {
  counter: number;
  content: string;
  icon: ReactElement;
};
export default function HowToPlay(props: Props) {
  return (
    <>
      <div className="iconHolder">
        {props.icon}
        <span className="counter">{props.counter < 10 ? "0" + props.counter : props.counter}</span>
      </div>
      <p>{props.content}</p>
    </>
  );
}
