export const SET_STORE = "SET_STORE";

export const setStore = (store) => {
  return {
    type: SET_STORE,
    payload: store,
  };
};
