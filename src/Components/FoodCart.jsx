import { useContext, useRef } from "react";
import { FoodContext } from "../Store/FoodContext";
import CartList from "./CartList";
import CheckoutForm from "./CheckoutForm";
export default function FoodCart() {
  const CheckoutDialog = useRef();

  function showDialog() {
    CheckoutDialog.current.showModal();
  }

  function closeDialog() {
    CheckoutDialog.current.close();
    console.log("Dialog Closed");
  }

  const { cartStatus, setCartStatus } = useContext(FoodContext);

  return (
    <>
      <dialog className={`cart ${cartStatus ? "visible" : ""}`} open>
        <h2>Your Cart</h2>
        <ul>
          <CartList />
        </ul>
        <h5 className="cart-total">$73.96</h5>
        <div className="modal-actions">
          <button
            className="text-button"
            onClick={() => {
              setCartStatus(false);
            }}
          >
            Close
          </button>
          <button
            className="text-button"
            onClick={() => {
              showDialog();
            }}
          >
            Go to Checkout
          </button>
        </div>
      </dialog>

      <dialog ref={CheckoutDialog}>
        <CheckoutForm closeDialog={closeDialog} />
      </dialog>
    </>
  );
}
