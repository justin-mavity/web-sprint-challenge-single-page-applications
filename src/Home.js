import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const routeToOrder = () => {
    history.push("/pizza/");
  };
  return (
    <div className="home">
      <h1>Your Favorite Pizza Delivered While You Code</h1>
      <button onClick={routeToOrder} className="order-button">
        Pizza?
      </button>
    </div>
  );
}
