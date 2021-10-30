import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { AppState } from "../../misc/types";
import { triggerSaga } from "../../redux/action/product";

function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(triggerSaga());
  }, [dispatch]);

  const data = useSelector((state: AppState) => {
    return state.productState.product;
  });
  console.log(data, "a");

  return (
    <ImageList
      sx={{ width: 500, height: 550 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {data.slice(0, 12).map((item) => (
        <ImageListItem key={item.api_featured_image}>
          <img
            src={`${item.api_featured_image}?w=161&fit=crop&auto=format`}
            srcSet={`${item.api_featured_image}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Page;
