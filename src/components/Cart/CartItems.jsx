import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { rupiahFormater } from "../../utils/formatter";

const CartItems = ({ title, quantity, price, total, id }) => {
  const dispatch = useDispatch();

  function removeItemHandler() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  function addItemHandler() {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
      })
    );
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-[16px] font-[500] text-slate-500 w-1/6 ">
          <h1 className="">{title}</h1>
          <p>{rupiahFormater(price)}</p>
        </div>
        <div className="text-[18px] font-[500] text-slate-500 shrink">
          <h1>{rupiahFormater(total)}</h1>
        </div>
        <div className="bg-[#eef0f1] px-2 py-2 font-bold text-slate-600 flex gap-4 rounded-md items-center">
          <button
            onClick={removeItemHandler}
            className="bg-white px-4 py-1 rounded-md"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={addItemHandler}
            className="bg-white px-4 py-1 rounded-md"
          >
            +
          </button>
        </div>
      </div>
      <hr className="border-b-slate-100 my-3 border-b-2" />
    </>
  );
};

export default CartItems;
