import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: "",
  notification: null,
  showNotif: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showCart(state) {
      state.progress = "cart";
    },
    hideCart(state) {
      state.progress = "";
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    closeNotification(state) {
      state.notification = null;
    },
  },
});

export const modalActions = modalSlice.actions;
