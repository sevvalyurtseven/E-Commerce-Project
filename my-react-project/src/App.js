import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <div className="text-[#252B42]">
      <Switch>
        <Route path = "/" exact>
          <HomePage />
        </Route>
        <Route path = "/productlist" exact>
          <ProductListPage />
        </Route>
        <Route path = "/about" exact>
          <AboutPage/>
        </Route>
        <Route path = "/team" exact>
          <TeamPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
