import { receivedCart, sendCart } from "../../service/api/cart";
import { cartActions } from "../slice/cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    await sendCart(cart);
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const response = await receivedCart();
    dispatch(cartActions.replaceCart(response.data));
  };
};
