import { useEffect, useState } from "react";

import Meals from "./Meals";
import "../index.css";
export default function FoodList() {
  const [foodList, setFoodList] = useState([]);

  /*useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setFoodList(resData);
      });
  }, []);*/

  useEffect(() => {
    fetch("http://localhost:3000/meals", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setFoodList(resData);
        console.log(resData);
      });
  }, []);

  return (
    <>
      <section id="meals" className="meal-item">
        <Meals foodList={foodList} />
      </section>
    </>
  );
}
