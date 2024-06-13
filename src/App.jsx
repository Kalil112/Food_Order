import FoodList from "./Components/FoodList";
import Header from "./Components/Header";
import FoodCart from "./Components/FoodCart";
import { useState } from "react";
import { FoodContextProvider } from "./Store/FoodContext.jsx";
function App() {
  return (
    <>
      <FoodContextProvider>
        <FoodCart />
        <Header />
        <FoodList />
      </FoodContextProvider>
    </>
  );
}

export default App;
