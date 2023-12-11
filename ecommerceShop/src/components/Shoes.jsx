import React from "react";
import { Box,Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Shoes(props) {
  return (
    <div>
      <div
        id="shoes"
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
              <li>
                  <Link
                    to="/womenStoreShoe"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    All Category
                  </Link>
                </li>
                <li>Sneakers</li>
                <li>
                  <Link
                    to="/womenStoreH"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Heels
                  </Link>
                </li>
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
              <li>
                  <Link
                    to="/menStoreShoe"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menStoreAS"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Athletic Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menStoreCB"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Casual Boots
                  </Link>
                </li>
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
                <li>School Shoes</li>
                <li>Sports Shoes</li>
              </ul>
            </section>
          </article>
        </Box>
      </div>
    </div>
  );
}

export default Shoes;
