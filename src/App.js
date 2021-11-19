import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import Search from "./components/Search";
import Footer from "./layouts/Footer";
import SideNav from "./layouts/SideNav";
import TopNav from "./layouts/TopNav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <SideNav />
        <Route path="/home" exact render={() => <HomePage />} />
        <Route path="/search" exact render={() => <Search />} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
