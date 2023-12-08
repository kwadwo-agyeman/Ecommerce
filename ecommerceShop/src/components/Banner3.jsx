import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/b3Img1.jpg";
import Img2 from "../assets/b3Img2.jpg";
import Img3 from "../assets/b3Img3.jpg";

function Banner3() {
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "grid" },
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 2,
        p: { xs: "1px", sm: "15px" },
        ml: { xs: 0, sm: 2 },
      }}
    >
      {bannerArr.map((item, index) => (
        <article style={{padding:"15px"}} key={index}>
          <Link>
            <img style={{}} src={item.img} alt="" />
          </Link>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              textShadow: "1px 1px 1px rgb(0,0,0,0.1)",
              fontSize: "30px",
            }}
          >
            {item.header}
          </Typography>
          <Link style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                textAlign: "center",
                color: "black",
                textDecoration: "underline",
                transition: "all 400ms ease",
                "&:hover": {
                  textDecorationThickness: "3px",
                },
              }}
            >
              {item.linkProduct}
            </Typography>
          </Link>
        </article>
      ))}
    </Box>
  );
}

export default Banner3;

const bannerArr = [
  { img: Img1, header: "Eternal Symbols", linkProduct: "SHOP CLASSICS" },
  { img: Img2, header: "Gent Heat", linkProduct: "SHOP MEN" },
  { img: Img3, header: "Fragrant Elixirs", linkProduct: "SHOP PERFUMES " },
];
