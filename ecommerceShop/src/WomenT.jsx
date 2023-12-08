import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "./components/LeftGrid";
import "./menstore.css";
function WomenT(props) {
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
      <Navbar />
      <Box sx={{ padding: 2 }}>
        <Typography
          sx={{ mt: 7, fontSize: { xs: "30px", sm: "30px" }, fontWeight: 500 }}
          variant="h3"
        >
          TUNICS
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

export default WomenT;
const leftGrid = [
  { header: "Brand", body: { title1: "Zara", title2: "Forever21" } },
  { header: "Color", body: { title1: "black", title2: "navyblue" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 1,
    img: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw54ad60ea/1_front_750/00494939-01.jpg?sw=300&sh=450",
    productName: "Black Women's Satin Tunic",
    gender: "women",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Forever21",
    size: 6.5,
    color: "black",
  },
  {
    id: 2,
    img: "https://liveunlimitedlondon.com/cdn/shop/products/LU1243_H_e31e577a-2f6e-4b3d-8835-72bc4458bb61_800x.jpg?v=1579700240",
    productName: "Jersey Satin Mix Tunic",
    gender: "women",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "Forever21",
    size: 7.0,
    color: "black",
  },
  {
    id: 3,
    img: "https://www.citychic.com.au/media/catalog/product/cache/1ef7fa863667a87bb19a34a82f4d98f0/210807NAVY-11.jpg",
    productName: "Zara Tunic Navy Blue Size 6",
    gender: "women",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "navyblue",
  },
  {
    id: 4,
    img: "https://di2ponv0v5otw.cloudfront.net/posts/2022/05/14/627f9310da10419adb456e81/m_627f9310da10419adb456e82.jpg",
    productName: "Elegance in Bloom Blouse",
    gender: "women",
    price: 100,
    priceCategory: "$0-$120",
    brand: "H&M",
    size: 7.0,
    color: "other",
  },
  {
    id: 5,
    img: "https://static.zara.net/photos///2023/V/0/7/p/6795/101/250/2/w/824/6795101250_1_1_1.jpg?ts=1679048033138",
    productName: "Women's Long Sleeve Loose Button-down Shirt",
    gender: "women",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "other",
  },
  {
    id: 6,
    img: "https://iconoflash.com/cdn/shop/products/TU012_NAV_1024x.jpg?v=1611164748",
    productName: "Boxy Vicose Tunic Forever 21",
    gender: "women",
    price: 375,
    priceCategory: "$120-$500",
    brand: "Forever21",
    size: 6.5,
    color: "navyblue",
  },
];
