import React from "react";

export default function OrderDetails({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza details...</h3>;
  }

  return (
    <div className="pizza container">
      <h2>Order Details</h2>
      <p>Size:{details.size}</p>
      <p>Toppings: {details.toppings}</p>
      <p>Instructions: {details.instructions}</p>
    </div>
  );
}
