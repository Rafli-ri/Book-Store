import { useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import Product from "./components/Product/Product";
import Notification from "./components/UI/Notification";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";
// import { modalActions } from "./store/modal-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.modal.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(
    //     modalActions.showNotification({
    //       status: 'pending',
    //       title: 'Sending...',
    //       message: 'Sending cart data!',
    //     })
    //   );
    //   const response = await fetch(
    //     'https://react-http-6b4a6.firebaseio.com/cart.json',
    //     {
    //       method: 'PUT',
    //       body: JSON.stringify(cart),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error('Sending cart data failed.');
    //   }

    //   dispatch(
    //     modalActions.showNotification({
    //       status: 'success',
    //       title: 'Success!',
    //       message: 'Sent cart data successfully!',
    //     })
    //   );
    // };
    if (isInitial) {
      isInitial = false;
      return;
    }
    // sendCartData().catch((error) => {
    //   dispatch(
    //     modalActions.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Sending cart data failed!',
    //     })
    //   );
    // });

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="w-full">
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      <Product />
      <Cart />
    </div>
  );
}

export default App;
