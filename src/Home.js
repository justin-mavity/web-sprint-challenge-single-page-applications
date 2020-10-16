import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const routeToOrder = () => {
    history.push("/src/PizzaForm.js");
    return (
      <div className="home-wrapper">
        <img src="'../Assets/Pizza.jpg" alt="" />
        <button onClick={routeToOrder} className="order-button">
          Order Now!
        </button>
      </div>
    );
  };
}
