import { toast } from "react-toastify";
import { AxiosInstance } from "../../api/axiosInstance";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (user) => ({ type: LOGIN_USER, payload: user });

export const logoutUser = () => ({ type: LOGOUT_USER });

export const userLogin = (data, history) => {
  return (dispatch) => {
    AxiosInstance.post("/login", data)
      .then((response) => {
        console.log(response.data);

        dispatch(loginUser(response.data));
        localStorage.setItem("token", response.data.token);
        toast.success("Welcome back!");
        history.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error occurred: " + error.response.data.message);
      });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    console.log("Cikis yapildi");
  };
};
