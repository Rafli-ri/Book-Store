import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import Button from "../UI/Button";
import CartItems from "./CartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.modal.progress);
  const cartItems = useSelector((state) => state.cart.items);

  function closeCartHandler() {
    dispatch(modalActions.hideCart());
  }

  return (
    <Modal
      open={progress === "cart"}
      onClose={progress === "cart" ? closeCartHandler : null}
    >
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          {...item}
          total={item.totalPrice}
        />
      ))}

      <Button outline onClick={closeCartHandler} className="bottom-7 my-4">
        Close
      </Button>
    </Modal>
  );
};

export default Cart;
