import Button from "./UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";

const Header = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  function showModalHandler() {
    dispatch(modalActions.showCart());
  }

  return (
    <>
      <nav className="p-5 w-full border-2 bg-white shadow-[rgba(0,_0,_0,_0.05)_0px_1px_2px_0px]">
        <div className="flex max-w-screen-lg mx-auto my-auto justify-between items-center">
          <p className="lg:text-[25px] font-bold text-slate-600">Shop</p>
          <div className="relative inline-flex w-fit">
            {cartQuantity > 0 && (
              <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-500 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                {cartQuantity}
              </div>
            )}
            <Button onClick={showModalHandler}>Cart </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
