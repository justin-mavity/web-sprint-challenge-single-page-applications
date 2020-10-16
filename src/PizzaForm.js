import React from "react";

export default function PizzaForm(props) {
  const { values, submit, update, disabled } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form contanier" onSubmit={onSubmit}>
      <div className="form-group inputs">
        {/*///Text Input///*/}
        <label>
          Name on order
          <input
            type="text"
            name="name"
            onChange={onChange}
            placeholder="Name"
            minLength="2"
          />
        </label>
        {/*///Dropdown for size///*/}
        <label>
          Choice of size
          <select name="size" value={values.size} onChange={onChange}>
            <option value="">---Select a size---</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <div className="toppings-checklist">
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>
          <label>
            Extra Cheese
            <input
              type="checkbox"
              name="extraCheese"
              checked={values.extraCheese}
              onChange={onChange}
            />
          </label>
          <label>
            Onions
            <input
              type="checkbox"
              name="onions"
              checked={values.onions}
              onChange={onChange}
            />
          </label>
          <label>
            Green Peppers
            <input
              type="checkbox"
              name="greenPeppers"
              checked={values.greenPeppers}
              onChange={onChange}
            />
          </label>
          <label>
            Black Olives
            <input
              type="checkbox"
              name="blackOlives"
              checked={values.blackOlives}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="instructions">
          <label>
            Special Instruction
            <input
              type="text"
              name="instructions"
              value={values.instructions}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="submit">
          <button disabled={disabled} onSubmit={onSubmit}>
            Add to order
          </button>
        </div>
      </div>
    </form>
  );
}
