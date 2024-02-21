import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { cartActions } from "../../store/cart-slice";
import { rupiahFormater } from "../../utils/formatter";

const ProductItem = ({ title, price, description, id }) => {
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  }

  return (
    <>
      <div className="w-full lg:w-[32%] rounded-lg py-4 overflow-hidden shadow-md bg-white">
        <div className="px-6 py-4">
          <div className="font-semibold text-xl text-slate-500">{title}</div>
          <span className="text-[18px] text-indigo-400 font-semibold">
            {rupiahFormater(price)}
          </span>
          <p className="text-slate-500 text-base mt-1">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Button outline onClick={addToCartHandler}>
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
