import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";

export interface BlogProps {
  id: number;
  title: string;
  image: string;
}

export default function BlogCard({ title, image }: BlogProps) {
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardActionArea>
          <Box position={"relative"}>
            <CardMedia component="img" width="100%" image={image} alt={image} />
            <Box
              position={"absolute"}
              sx={{ inset: "10px", border: "2px dashed #fff" }}
            ></Box>
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"left"}
              fontWeight={700}
              fontSize={"27px"}
              color={"#545454"}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}