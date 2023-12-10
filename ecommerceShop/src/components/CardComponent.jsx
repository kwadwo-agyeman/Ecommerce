import { Badge, Box, Divider, Tooltip, Typography } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

function Card(props) {
  // Find the corresponding item in the cart
  const cartItem = props.cartItems.find(
    (item) => item.id === props.cardItem.id
  );
  console.log(cartItem);

  return (
    <div>
      {/* Card Container */}
      <Box
        sx={{
          border: "1px solid #ECF0F1",
          height: "32rem",
          borderBottom: "2px solid #ECF0F1",
          transition: "all 200ms ease",
          "&:hover": {
            borderBottom: "2px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderTop: "1px solid black",
          },
          position: "relative",
        }}
      >
        {/* Image Section */}
        <Box sx={{ p: 1, position: "relative" }}>
          <img style={{ height: "23rem" }} src={props.img} alt="" />
          {/* Favorite Icon */}
          <Box sx={{ position: "absolute", top: 6, right: 6 }}>
            <Checkbox
              icon={<FavoriteBorderIcon sx={{ fontSize: "35px" }} />}
              checkedIcon={
                <FavoriteIcon sx={{ color: "grey", fontSize: "35px" }} />
              }
            />
          </Box>
        </Box>
        {/* Divider */}
        <Divider></Divider>
        {/* Content Section */}
        <Box sx={{ p: 1 }}>
          {/* Product Name */}
          <Typography sx={{ fontWeight: 500 }}>{props.productName}</Typography>
          <br />
          <br />
          {/* Price and Add to Cart */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              width: "90%",
              bottom: "10px",
            }}
          >
            {/* Price */}
            <Typography>
              <span style={{ fontWeight: 500 }}>Price:</span> ${props.price}
            </Typography>
            {/* Add To Cart Button */}
            <Tooltip title="Add To Cart">
              <Badge
                badgeContent={cartItem ? cartItem.quantity : 0}
                color="primary"
              >
                <ShoppingCart
                  onClick={() => props.addToCart(props.cardItem, 1)}
                />
              </Badge>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Card;
