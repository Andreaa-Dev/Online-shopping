import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { ProductType } from "../../misc/types";

type ProductItemPropsType = {
  item: ProductType;
};

export default function ProductItem({ item }: ProductItemPropsType) {
  console.log(item, "da");
  return (
    <Card sx={{ maxWidth: 345, border: "2px #EDEDED solid", margin: 1 }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{
            marginTop: 1,
          }}
        >
          <img src={item.api_featured_image} alt={item.name} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
