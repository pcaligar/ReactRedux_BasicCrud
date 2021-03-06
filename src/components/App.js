import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Componenets
import Header from "./Header";
import Products from "./Products";
import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/new" component={NewProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
