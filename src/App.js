import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./state/slice/cart-slice";
import { sendCartData, getCartData } from "./state/action-creator";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.toggleReducer.isCardVisible);
  const cart = useSelector((state) => state.cartReducer.items);

  // useEffect(() => {
  //   dispatch(getCartData());
  // }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
