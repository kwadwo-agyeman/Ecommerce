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
import { CartProvider } from "./context/ShopContext";
import ChildrenStore from "./ChildrenStore";
import Card from "./components/CardComponent";
function App() {
  const [cardArr, setCardArr] = useState([]);
  console.log(cardArr);
  const [filter, setFilter] = useState(true);
  //const [quantity, setQuantity] = useState(cardArr.map(() => 0));
  // console.log(quantity);
  // const [cartItem, setCartItem] = useState(cardArr.map(() => {}));
  //console.log(cartItem);
  /* useEffect(() => {
    setQuantity(cardArr.map(() => 0));
  }, [cardArr]);
*/

  const toggleMenuHeight = (index, setAddMinus) => {
    setAddMinus((prev) => {
      const updatedArr = prev.map((state, i) => (index === i ? !state : state));
      return updatedArr;
    });
  };
  function inspectCategory(categorizedArr) {
    setCardArr(categorizedArr)
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
  /*
  function addToCart(cardID, cardInfo) {
    if(cardID<12){
      return cardID = cardID
    }
    else if (cardID > 12 && cardID < 24){
      return cardID = cardID - 12
    }
    else if(cardID > 24 && cardArr < 36){
      return cardID = cardID -24
    }
    setQuantity((prev) => {
      const updatedQty = [...prev];
      updatedQty[cardID - 1] += 1;
      return updatedQty;
    });
    setCartItem((prev) => {
      const updatedCartItem = [...prev];
      updatedCartItem[cardID - 1] = cardInfo;
      return updatedCartItem;
    });
  }
*/
  return (
    <div>
      <Navbar />
      <CartProvider>
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
      </CartProvider>
    </div>
  );
}

export default App;
