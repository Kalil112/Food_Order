import { useContext } from "react";
import { FoodContext } from "../Store/FoodContext";
export default function CheckoutForm({ closeDialog }) {
  const { orders } = useContext(FoodContext);

  function formSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    //let customerData = JSON.stringify(data);
    //let orderData = JSON.stringify(orders.orderArr);

    /*body: {
        order: {
          customer: customerData,
          items: orderData,
        },
      },*/

    const req = new Request({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: orders.orderArr,
          customer: data,
        },
      }),
    });

    fetch("http://localhost:3000/orders", req);
  }

  return (
    <>
      <form
        class="control"
        onSubmit={formSubmit}
        name="CheckoutForm"
        method="post"
      >
        <p>Checkout</p>
        <div>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" class="form-textbox" name="name" />
          </div>
          <div>
            <label htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" class="form-textbox" name="email" />
          </div>
          <div>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" class="form-textbox" name="street" />
          </div>
          <div class="control-row">
            <div>
              <label htmlFor="postal-code">Postal Code</label>
              <input
                type="number"
                id="postal-code"
                class="form-control__textbox"
                name="postal-code"
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                class="form-control__textbox"
                name="city"
              />
            </div>
          </div>
          <div class="button-row" style={{ padding: "1rem 0.5rem" }}>
            <button
              className="text-button"
              type="button"
              onClick={() => {
                closeDialog();
              }}
            >
              Close
            </button>
            <button className="button" type="submit" name="submit-btn">
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
