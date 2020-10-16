import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";
import OrderDetails from "./OrderDetails";
import axios from "./axios";

const initalFormValues = {
  name: "",
  size: "",
  toppings: "",
  instructions: "",
};

export default function App(props) {
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initalFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newOredr = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: formValues.toppings,
      instructions: formValues.instructions.trim(),
    };

    if (
      !newOredr.name ||
      !newOredr.size ||
      !newOredr.toppings ||
      !newOredr.instructions
    ) {
      return;
    }

    axios
      .post("fakeapi.com", newOredr)
      .then((res) => {
        setOrder([...order, res.data]);
        setFormValues(initalFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setOrder(res.data));
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <nav>
          <h1>Lambda Eats</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/pizza-form">Order</Link>
          </div>
        </nav>
        <Switch>
          <Route path={"/pizza-form"}>
            <PizzaForm
              values={formValues}
              update={updateForm}
              submit={submitForm}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
