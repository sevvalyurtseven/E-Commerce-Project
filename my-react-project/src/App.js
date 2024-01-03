import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/SignUp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AxiosInstance, renewAxiosInstance } from "./api/axiosInstance";
import { setCategories, setRoles } from "./store/actions/globalActions";
import LoginPage from "./pages/LoginPage";
import { loginUser, logoutUser } from "./store/actions/userActions";

function App() {
  const dispatch = useDispatch();

  //Componentin yuklenmesi aninda rol bilgilerini API'den getirme

  useEffect(() => {
    //Sign up formun role id'lerini fetch et!
    dispatch(setRoles());
    dispatch(setCategories());

    //Local'de token bilgisi var mi?
    const token = localStorage.getItem("token");

    //token varsa, backend'e request atarak kontrol edicek
    if (token) {
      //backend e istek gonder

      AxiosInstance.get("/verify")
        .then((response) => {
          console.log("token verify res > ", response);
          //login oldu

          const user = response.data;
          dispatch(loginUser(user));
          renewAxiosInstance();
          console.log("verified", user);
        })
        .catch((error) => {
          console.error("token verify err > ", error);
          dispatch(logoutUser());
          localStorage.removeItem("token");
          renewAxiosInstance();
        });
    }
  }, [dispatch]);

  return (
    <div className="text-[#252B42]">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/productlist" exact>
          <ProductListPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/team" exact>
          <TeamPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/product" exact>
          <ProductPage />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
