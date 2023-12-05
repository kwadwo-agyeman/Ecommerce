import React from 'react'
import { Box,Typography } from "@mui/material";

function Clothing(props) {
  return (
    <div>
        <div
          id="clothes"
          className="nav--menu--alt"
          onMouseLeave={props.handleMouseLeave}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: "#f0ffff",
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
                  <li>Blouse</li>
                  <li>Tunics</li>
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
                  <li>T-Shirts</li>
                  <li>Club T's</li>
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
                  <li>Dress</li>
                  <li>Shirts</li>
                </ul>
              </section>
            </article>
          </Box>
        </div>

    </div>
  )
}

export default Clothing
