import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";
import OrderDetails from "./OrderDetails";
import schema from "./formSchema";
import * as yup from "yup";

import "./App.css";

const initalFormValues = {
  name: "",
  size: "",
  toppings: "",
  instructions: "",
};

const initialErrors = {
  name: "",
  size: "",
  toppings: "",
  instructions: "",
};

const initialOrders = [];
const initialDisabled = true;

export default function App(props) {
  const [order, setOrder] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initalFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    setOrder([...order, newOrder]);
    setFormValues(initalFormValues);
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: [
        "pepperoni",
        "extraCheese",
        "onions",
        "greenPeppers",
        "blackOlives",
        "mushrooms",
      ],
      instructions: formValues.instructions.trim(),
    };
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewOrder(newOrder);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <div className="App-header">
        <header>
          <nav className="App-link">
            <h3>Lambda Eats</h3>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/pizza">
              Order
            </Link>
          </nav>
        </header>
      </div>
      <Switch>
        <Route path={"/pizza"}>
          <PizzaForm
            values={formValues}
            update={inputChange}
            submit={submitForm}
            disabled={disabled}
            errors={errors}
          />
          <div>
            {order.map((orders) => {
              return <OrderDetails details={orders} />;
            })}
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
