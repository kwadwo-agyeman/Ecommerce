import React from "react";
import { Box,Typography } from "@mui/material";

function Perfumes(props) {
  return (
    <div>
      <div
        id="perfumes"
        className="nav--menu--alt"
        onMouseLeave={props.handleMouseLeave}
        style={{
            position: "absolute",
            top: "2rem",
            left: 0,
            zIndex: 222,
            width:"100%"
          }}  

      >
        <Box
          sx={{
            p: 2,
            bgcolor: "rgb(240, 255, 255,0.9)",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          <article>
            <Typography
              variant="h7"
              sx={{ fontWeight: 600, marginLeft: "2.5rem" }}
            >
              Women
            </Typography>
            <section>
              <ul>
                <li>All Category</li>
                <li>Floral Scents</li>
                <li>Citrus Fragrances</li>
              </ul>
            </section>
          </article>
          <article>
            <Typography
              variant="h7"
              sx={{ fontWeight: 600, marginLeft: "2.5rem" }}
            >
              Men
            </Typography>
            <section>
              <ul>
                <li>All Category</li>
                <li>Woody Scents</li>
                <li>Spicy Fragrances</li>
              </ul>
            </section>
          </article>
          <article>
            <Typography
              variant="h7"
              sx={{ fontWeight: 600, marginLeft: "2.5rem" }}
            >
              Children
            </Typography>
            <section>
              <ul>
                <li>All Category</li>
                <li>Fruity Scents</li>
                <li>Bubblegum Fragrances</li>
              </ul>
            </section>
          </article>
        </Box>
      </div>
    </div>
  );
}

export default Perfumes;
