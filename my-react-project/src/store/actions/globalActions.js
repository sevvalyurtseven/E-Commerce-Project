import { AxiosInstance } from "../../api/axiosInstance";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setRoles = () => (dispatch) => {
  return AxiosInstance.get("/roles")
    .then((res) => {
      console.log("Roles Fetched:", res);
      const roles = { type: SET_ROLES, payload: res.data };
      dispatch(roles);
    })
    .catch((error) => console.error("Error:", error));
};

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
