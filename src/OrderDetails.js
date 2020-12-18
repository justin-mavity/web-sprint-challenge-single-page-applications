import React from "react";

export default function OrderDetails({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza details...</h3>;
  }

  return (
    <div className="pizza container">
      <h2>{details.name}</h2>
      <div>
        <p>Size:{details.size}</p>
        <p>Toppings: {details.toppings.join(", ")}</p>
        <p>Instructions: {details.instructions}</p>
      </div>
    </div>
  );
}
