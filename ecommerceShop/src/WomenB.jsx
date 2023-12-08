import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "./components/LeftGrid";
import "./menstore.css";
function WomenB(props) {
  useEffect(() => {
    function mountItems() {
      props.inspectCategory(cardContent);
    }
    mountItems();
    window.addEventListener("DOMContentLoaded", mountItems);
    return () => {
      window.removeEventListener("DOMContentLoaded", mountItems);
    };
  }, []);

  return (
    <div>
      <Box sx={{ padding: 2 }}>
        <Typography
          sx={{ mt: 7, fontSize: { xs: "30px", sm: "30px" }, fontWeight: 500 }}
          variant="h3"
        >
          BLOUSES
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "21% 78%" },
          gap: 2,
          p: 2,
        }}
      >
        <Box sx={{ bgcolor: "#FFF8F0", p: 2, height: "fit-content" }}>
          <Typography>Filter Results</Typography>
          <Typography>(select a filter at a time)</Typography>
          <LeftGrid
            leftGrid={leftGrid}
            cardContent={cardContent}
            filterCardContent={props.filterCardContent}
            toggleMenuHeight={props.toggleMenuHeight}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" },
            gap: 2,
            padding: 2,
            mt: -1.5,
          }}
        >
          {props.cardArr}
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default WomenB;
const leftGrid = [
  { header: "Brand", body: { title1: "Zara", title2: "H&M" } },
  { header: "Color", body: { title1: "green", title2: "yellow" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 1,
    img: "https://images.stylight.net/image/upload/t_web_product_330x440max_nobg/q_auto:eco,f_auto/cjdk0hnsa3iadetuctrf.webp",
    productName: "Green Women's Satin Blouse",
    gender: "women",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "green",
  },
  {
    id: 2,
    img: "https://cdn.mall.adeptmind.ai/https%3A%2F%2Flp2.hm.com%2Fhmgoepprod%3Fset%3Dquality%255B79%255D%252Csource%255B%252F0a%252F5c%252F0a5c03d6340c6ee8e56f01e4fe85f4522280a10c.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D%26call%3Durl%255Bfile%3A%2Fproduct%2Fmain%255D_large.webp",
    productName: "H&M Boxy Vicose Blouse",
    gender: "women",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "H&M",
    size: 7.0,
    color: "green",
  },
  {
    id: 3,
    img: "https://images.vestiairecollective.com/cdn-cgi/image/w=1246,q=70,f=auto,/produit/yellow-not-specified-zara-top-26942165-2_1.jpg",
    productName: "Zara Blouse Yellow Size 6",
    gender: "women",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "yellow",
  },
  {
    id: 4,
    img: "https://cdna.lystit.com/photos/hm/46e26bdd/hm-Black-Blouse.jpeg",
    productName: "Elegance in Bloom Blouse",
    gender: "women",
    price: 100,
    priceCategory: "$0-$120",
    brand: "H&M",
    size: 7.0,
    color: "black",
  },
  {
    id: 5,
    img: "https://target.scene7.com/is/image/Target/GUEST_6c7a86de-526c-426f-94a6-5f1270e032bc?wid=488&hei=488&fmt=pjpeg",
    productName: "Women's Long Sleeve Loose Button-down Shirt",
    gender: "women",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "yellow",
  },
  {
    id: 6,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8c%2Ff6%2F8cf6d32420f81d791b98c74e0bcf4c2b2cef2af1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    productName: "Boxy Vicose Blouse H&M",
    gender: "women",
    price: 375,
    priceCategory: "$120-$500",
    brand: "H&M",
    size: 6.5,
    color: "green",
  },
];
