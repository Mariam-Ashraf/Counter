import Home from "./compontents/home/Home";
import Navbar from "./compontents/navbar/Navbar";
import Product from "./compontents/product/Product";
import Shop from "./compontents/shop/Shop";
import Counter from "./compontents/counter/Counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./views/Todo";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Shop} path="/shop" exact />
        <Route component={Product} path="/shop/:id" />
        <Route component={Counter} path="/counter" />
        <Route component={Todo} path="/todo" />
      </Switch>
    </Router>
  );
}

export default App;
