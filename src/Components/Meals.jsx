import { useContext } from "react";
import { FoodContext } from "../Store/FoodContext";
const Meals = ({ foodList }) => {
  const { AddItem } = useContext(FoodContext);

  function onSelectedMeal(MealName) {
    let orderObj = {
      ...MealName,
      quantity: 1,
    };
    AddItem(orderObj);
  }

  return (
    <>
      {foodList.map((element) => {
        return (
          <article key={element.id}>
            <img
              src={`http://localhost:3000/${element.image}`}
              alt="Food Image"
            />
            <h3 id="">{element.name}</h3>
            <p className="meal-item-price">{element.price}</p>
            <div>
              <p className=".meal-item-description">{element.description}</p>
            </div>

            <button
              className="meal-item-actions"
              onClick={() => {
                onSelectedMeal(element);
              }}
            >
              Add to cart
            </button>
          </article>
        );
      })}
    </>
  );
};
export default Meals;
