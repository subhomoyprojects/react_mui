import { CardContent, Typography } from "@mui/material";
import { TestimonialsCard } from "../lid/StyleComponentHome";

type Props = {
  image: string;
  name: string;
  designation: string;
  content: string;
};

export default function Testimonials(props: Props) {
  return (
    <>
      <TestimonialsCard>
        <figure className="abater">
          <img src={props.image} alt="" />
        </figure>
        <CardContent>
          <Typography variant="h4">
            {props.name} <span>{props.designation}</span>
          </Typography>
          <Typography variant="body1">{props.content}</Typography>
        </CardContent>
      </TestimonialsCard>
    </>
  );
}
