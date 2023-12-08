import React, { useState } from "react";
import NavSmallMenu from "./NavSmallMenu";
import "./navbar.css";
import { AppBar, Box, Breadcrumbs, Toolbar, Typography } from "@mui/material";
import ShoppingBag from "@mui/icons-material/ShoppingBagOutlined";
import Menu from "@mui/icons-material/DragHandleOutlined";
import { styled } from "@mui/material";
import Clothing from "../Clothing";
import Shoes from "../Shoes";
import Perfumes from "../Perfumes";
import Brands from "../Brands";
import ArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Link } from "react-router-dom";
const Navlinks = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const MenuCart = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "15%",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const NavMenuSmall = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const NavMenuLarge = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));
function Navbar() {
  const [navSmallMenu, setNavSmallMenu] = useState(false);
  const handleDisplay = (e) => {
    const btns = document.querySelectorAll(".btn");
    const navMenus = document.querySelectorAll(".nav--menu--alt");

    const id = e.currentTarget.dataset.id;

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    navMenus.forEach((navMenu) => {
      navMenu.classList.remove("active");
      navMenu.style.transform = "translateY(0)";
      navMenu.style.transition = "400ms all ease";
    });

    const element = document.getElementById(id);

    element.classList.add("active");
  };

  function handleMouseLeave(e) {
    e.currentTarget.style.transform = "translateY(-100%)";
    e.currentTarget.style.transition = "400ms all ease";
  }

  const showNavMenuSmall = () => {
    setNavSmallMenu((prev) => !prev);
  };

  return (
    <div>
      <Box>
        <AppBar
          sx={{
            height: "3rem",
            backgroundColor: "#0E34A0",
            backdropFilter: "8px",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: 650 }}>
                UrbanCart
              </Typography>
              <Navlinks>
                <p
                  data-id="clothes"
                  className="btn active"
                  onMouseEnter={handleDisplay}
                  style={{ cursor: "pointer" }}
                >
                  clothes
                </p>
                <p
                  data-id="shoes"
                  className="btn"
                  onMouseEnter={handleDisplay}
                  style={{ cursor: "pointer" }}
                >
                  shoes
                </p>
                <p
                  data-id="perfumes"
                  className="btn "
                  onMouseEnter={handleDisplay}
                  style={{ cursor: "pointer" }}
                >
                  perfumes
                </p>
                <p
                  data-id="brands"
                  className="btn "
                  onMouseEnter={handleDisplay}
                  style={{ cursor: "pointer" }}
                >
                  brands
                </p>
                <Box >
                  <ShoppingBag />
                </Box>
              </Navlinks>

              <MenuCart>
                <ShoppingBag />
                <Box onClick={showNavMenuSmall}>
                  <Menu />
                </Box>
              </MenuCart>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <NavMenuSmall
        sx={{
          p: 2,
          bgcolor: "#f0ffff",
          transform: navSmallMenu ? "translateY(0)" : "translateY(-100%)",
          transition: "all 400ms ease",
          position: "fixed",
          width: "100%",
          top: "3rem",
          left: 0,
          zIndex: 333,
        }}
      >
        <NavSmallMenu />
      </NavMenuSmall>
      <NavMenuLarge
        sx={{
          width: "95%",
          m: "1.0rem auto 0",
          p: 2,
          position: "fixed",
          width: "100%",
          left: 0,
          zIndex: 333,
        }}
      >
        <Clothing handleMouseLeave={handleMouseLeave} />
        <Shoes handleMouseLeave={handleMouseLeave} />
        <Perfumes handleMouseLeave={handleMouseLeave} />
        <Brands handleMouseLeave={handleMouseLeave} />
      </NavMenuLarge>
    </div>
  );
}

export default Navbar;
