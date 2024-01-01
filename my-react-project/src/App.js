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
import { AxiosInstance } from "./api/axiosInstance";
import { setRoles } from "./store/actions/globalActions";
import LoginPage from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();

  //Componentin yuklenmesi aninda rol bilgilerini API'den getirme

  useEffect(() => {
    dispatch(setRoles());
  }, []);

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
