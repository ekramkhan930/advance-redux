import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggleActions } from "../../state/slice/toggle-slice";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(toggleActions.toggle());
  };

  const cartQuantity = useSelector((state) => state.cartReducer.totalQuantity);

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
