export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVATE_PAGE = "SET_ACTIVATE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

export const setTotalProductCount = (count) => ({
  type: SET_TOTAL_PRODUCT_COUNT,
  payload: count,
});

export const setPageCount = (count) => ({
  type: SET_PAGE_COUNT,
  payload: count,
});

export const setActivatePage = (page) => ({
  type: SET_ACTIVATE_PAGE,
  payload: page,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
