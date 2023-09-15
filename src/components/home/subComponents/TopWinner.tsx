import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { TopWinnerCard } from "../lid/StyleComponentHome";
type Props = {
  title: string;
  img: string;
};
export default function TopWinner(props: Props) {
  return (
    <TopWinnerCard>
      <CardActionArea>
        <CardMedia component="img" height="140" image={props.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </TopWinnerCard>
  );
}
