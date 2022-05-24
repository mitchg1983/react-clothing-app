import "./App.css";
import Item from "./components/Item";
import { clothing } from "./data/clothing";
import { useState } from "react";

const getOutfit = (dressCode) => {
  const dressCodeClothes = clothing.filter(
    (item) => item.dressCode === dressCode
  );

  const topsList = dressCodeClothes.filter((item) => item.type === "top");
  const bottomsList = dressCodeClothes.filter((item) => item.type === "bottom");
  const shoesList = dressCodeClothes.filter((item) => item.type === "shoes");

  const randomTop = topsList[Math.floor(Math.random() * topsList.length)];
  const randomBottom =
    bottomsList[Math.floor(Math.random() * bottomsList.length)];
  const randomShoes = shoesList[Math.floor(Math.random() * shoesList.length)];

  return {
    top: randomTop,
    bottom: randomBottom,
    shoes: randomShoes,
  };
};

// console.log(getOutfit("sport"));

const App = () => {
  const [selectedOutfitToday, setSelectedOutfitToday] = useState(
    getOutfit("formal")
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => {
          setSelectedOutfitToday(getOutfit("formal"));
        }}
      >
        Get Outfit!
      </button>
      <div>See below for your fashion report</div>
      <div>Date: Tuesday, May 24</div>

      <Item
        description={selectedOutfitToday.top.description}
        type={selectedOutfitToday.top.type}
        itemImage={selectedOutfitToday.top.imageUrl}
      />
      <Item
        description={selectedOutfitToday.bottom.description}
        type={selectedOutfitToday.bottom.type}
        itemImage={selectedOutfitToday.bottom.imageUrl}
      />
      <Item
        description={selectedOutfitToday.shoes.description}
        type={selectedOutfitToday.shoes.type}
        itemImage={selectedOutfitToday.shoes.imageUrl}
      />

      <button>Try Again!</button>
    </div>
  );
};

export default App;
