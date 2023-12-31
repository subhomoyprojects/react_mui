import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductCardTitle } from "../lid/StyleComponentHome";
import { useState } from "react";
type Props = {
  img: string;
  title: string;
  package: number;
  tag: string[];
  announcement: string;
  bgColor?: string;
};
export default function ProductCard(props: Props) {
  const [bgColor] = useState(props.bgColor);
  return (
    <Card className="proCardHolder">
      <CardActionArea>
        <Box className="proImgHolder">
          <CardMedia component="img" height="140" image={props.img} alt="green iguana" />
          <span>
            <small>€{props.package.toFixed(2)}</small>
            {props.announcement.length > 0 ? <b>{props.announcement}</b> : ""}
          </span>
        </Box>
        <CardContent>
          <ProductCardTitle variant="h4">{props.title}</ProductCardTitle>
        </CardContent>
      </CardActionArea>
      <CardActions className="productTag" style={{ backgroundColor: bgColor }}>
        <Typography variant="h5">{props.tag[0]}</Typography>
      </CardActions>
    </Card>
  );
}
