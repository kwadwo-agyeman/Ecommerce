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
import ChildrenStoreD from "./ChildrenStoreD";
import ChildrenStoreS from "./ChildrenStoreS";
function App() {
  // State to manage the array of cards
  const [cardArr, setCardArr] = useState([]);
  console.log(cardArr);

  // State to toggle menu height
  const [filter, setFilter] = useState(true);

  // Function to toggle menu height based on index
  const toggleMenuHeight = (index, setAddMinus) => {
    setAddMinus((prev) => {
      const updatedArr = prev.map((state, i) => (index === i ? !state : state));
      return updatedArr;
    });
  };

  // Function to inspect and set the card category
  function inspectCategory(categorizedArr) {
    setCardArr(categorizedArr);
  }

  // Function to filter card content based on title
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

  return (
    <div>
      {/* CartProvider to manage cart state */}
      <CartProvider>
        {/* Navbar component for navigation */}
        <Navbar />

        {/* Routing for different pages */}
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

          <Route
            path="/childrenStoreD"
            element={
              <ChildrenStoreD
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/childrenStoreS"
            element={
              <ChildrenStoreS
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
