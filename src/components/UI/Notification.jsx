import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";

const Notification = ({ title, message, status }) => {
  let specialClasses = "";

  if (status === "error") {
    specialClasses = "dark:bg-red-400";
  }
  if (status === "pending") {
    specialClasses = "dark:bg-yellow-400";
  }

  if (status === "success") {
    specialClasses = "dark:bg-green-400";
  }

  const cssClasses = `${"dark:bg-green-800"} ${specialClasses}`;

  const dispatch = useDispatch();

  function closeHandler() {
    dispatch(modalActions.closeNotification());
  }

  return (
    <div
      id="toast-default"
      className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute top-1 left-1/2 transform -translate-x-1/2"
      role="alert"
    >
      <div
        className={`${cssClasses} inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-indigo-900 bg-blue-100 rounded-lg dark:text-blue-200`}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 21"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"
          />
        </svg>
        <span className="sr-only"> icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">
        <p className="font-bold">{title}</p> <p>{message}</p>
      </div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={closeHandler}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Notification;
