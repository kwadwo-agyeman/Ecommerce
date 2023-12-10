import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NavSmallMenu() {
  return (
    <div>
      <section style={{ paddingBottom: "2rem" }}>
        {navSmallData.map((item, index) => (
          <Box key={index}>
            <article
              style={{ display: "flex", alignItems: "center", gap: "15px" }}
            >
              <Typography variant="h5">{item.header}</Typography>
              <article style={{ display: "inline-block" }}></article>
            </article>
            {/********** WOMEN ******* */}

            <Breadcrumbs aria-label={item.header} sx={{ p: 1 }}>
              <Typography sx={{ display: "block" }}>
                {item.gender[0]}
              </Typography>
              <Link to={item.links.women[0]}>{item.content.women[0]}</Link>
              <Link to={item.links.women[1]}>{item.content.women[1]}</Link>
              <Link to={item.links.women[2]}>{item.content.women[2]}</Link>
            </Breadcrumbs>
            {/********** MEN ******* */}
            <Breadcrumbs aria-label={item.header} sx={{ p: 1 }}>
              <Typography sx={{ display: "block" }}>
                {item.gender[1]}
              </Typography>
              <Link to={item.links.men[0]}>{item.content.men[0]}</Link>
              <Link to={item.links.men[1]}>{item.content.men[1]}</Link>
              <Link to={item.links.men[2]}>{item.content.men[2]}</Link>
            </Breadcrumbs>

            <Breadcrumbs aria-label={item.header} sx={{ p: 1 }}>
              <Typography sx={{ display: "block" }}>
                {item.gender[2]}
              </Typography>

              <Link to={item.links.children[0]}>
                {item.content.children[0]}
              </Link>

              <Link to={item.links.children[1]}>
                {item.content.children[1]}
              </Link>

              <Link to={item.links.children[2]}>
                {item.content.children[2]}
              </Link>
            </Breadcrumbs>
          </Box>
        ))}
      </section>
    </div>
  );
}

export default NavSmallMenu;
const navSmallData = [
  {
    header: "Clothes",
    gender: ["Women", "Men", "Children"],
    content: {
      women: ["All Category", "Blouse", "Tunics"],
      men: ["All Category", "T-Shirts", "Polo Shirts"],
      children: ["All Category", "Dress", "Shirts"],
    },
    links: {
      women: ["/womenStore", "/womenB", "/womenT"],
      men: ["/menStore", "/menStoreTS", "/menStoreCT"],
      children: ["/childrenStore","/childrenStoreD","/childrenStoreS"],
    },
  },
];
