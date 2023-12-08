import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Home";
import MenStore from "./MenStore";
import MenStoreTS from "./MenStoreTS";
import MenStoreCT from "./MenstoreCT";
import WomenStore from "./WomenStore";
import WomenB from "./WomenB";
import WomenT from "./WomenT";
import Navbar from "./components/Navbar/Navbar";
import ChildrenStore from "./ChildrenStore";
import Card from "./components/CardComponent";
function App() {
  const [cardArr, setCardArr] = useState([]);
  console.log(cardArr);
  const [filter, setFilter] = useState(true);
  const [quantity, setQuantity] = useState(cardArr.map(() => 0));
  console.log(quantity);
  const [cartItem,setCartItem] = useState("");
  console.log(cartItem)

  const toggleMenuHeight = (index, setAddMinus) => {
    setAddMinus((prev) => {
      const updatedArr = prev.map((state, i) => (index === i ? !state : state));
      return updatedArr;
    });
  };
  function inspectCategory(categorizedArr) {
    const cardItems = categorizedArr.map((cardItem, index) => (
      <Card
        key={index}
        id={cardItem.id}
        img={cardItem.img}
        productName={cardItem.productName}
        gender={cardItem.gender}
        price={cardItem.price}
        color={cardItem.color}
        brand={cardItem.brand}
        cardItem={cardItem}
        addToCart={addToCart}
      />
    ));
    setCardArr(cardItems);
  }

  const filterCardContent = (title, cardContent) => {
    console.log("Filtering with title:", title);
    setFilter(!filter);
    if (filter === false) {
      inspectCategory(cardContent);
    } else {
      const categoryArr = cardContent.filter((item) => {
        if (
          item.color === title ||
          item.brand === title ||
          item.priceCategory === title
        ) {
          return true;
        }
        return false;
      });
      inspectCategory(categoryArr);
    }
  };
  useEffect(() => {
    setQuantity(cardArr.map(() => 0));
  }, [cardArr]);

  function addToCart(cardID,cardInfo) {
    setQuantity((prev) => {
      const updatedQty = [...prev];
      updatedQty[cardID - 1] += 1;
      return updatedQty;
    });
    setCartItem(cardInfo)
  }


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/womenStore"
          element={
            <WomenStore
              inspectCategory={inspectCategory}
              toggleMenuHeight={toggleMenuHeight}
              cardArr={cardArr}
              filterCardContent={filterCardContent}
            />
          }
        />
        <Route
          path="/womenB"
          element={
            <WomenB
              inspectCategory={inspectCategory}
              toggleMenuHeight={toggleMenuHeight}
              cardArr={cardArr}
              filterCardContent={filterCardContent}
            />
          }
        />
        <Route
          path="/womenT"
          element={
            <WomenT
              inspectCategory={inspectCategory}
              toggleMenuHeight={toggleMenuHeight}
              cardArr={cardArr}
              filterCardContent={filterCardContent}
            />
          }
        />

        <Route
          path="/menStore"
          element={
            <MenStore
              inspectCategory={inspectCategory}
              toggleMenuHeight={toggleMenuHeight}
              cardArr={cardArr}
              filterCardContent={filterCardContent}
            />
          }
        />
        <Route
          path="/menStoreTS"
          element={
            <MenStoreTS
              inspectCategory={inspectCategory}
              toggleMenuHeight={toggleMenuHeight}
              cardArr={cardArr}
              filterCardContent={filterCardContent}
            />
          }
        />
        <Route
          path="/menStoreCT"
          element={
            <MenStoreCT
              inspectCategory={inspectCategory}
              toggleMenuHeight={toggleMenuHeight}
              cardArr={cardArr}
              filterCardContent={filterCardContent}
            />
          }
        />

        <Route
          path="/childrenStore"
          element={
            <ChildrenStore
              inspectCategory={inspectCategory}
              toggleMenuHeight={toggleMenuHeight}
              cardArr={cardArr}
              filterCardContent={filterCardContent}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
