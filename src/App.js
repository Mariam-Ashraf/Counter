import Home from "./compontents/home/Home";
import Navbar from "./compontents/navbar/Navbar";
import Product from "./compontents/product/Product";
import Shop from "./compontents/shop/Shop";
import Counter from "./compontents/counter/Counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Shop} path="/shop" exact />
        <Route component={Product} path="/shop/:id" />
        <Route component={Counter} path="/counter" />
      </Switch>{" "}
    </Router>
  );
}

export default App;

/* <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/counter" component={Counter} />
           <Route component={Shop} path="/shop" /> 
          <Route component={Product} path="/shop/:id" />
        </Switch>
      </div>
    </Router> */
