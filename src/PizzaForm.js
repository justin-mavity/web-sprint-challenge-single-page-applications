import React from "react";
import styled from "styled-components";

const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledToppings = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 30%;
  height: 20vh;
  margin: 0 35% 5% 35%;
`;

const StyledLabel = styled.label`
  margin: 2% 0;
`;

export default function PizzaForm(props) {
  const { values, submit, update, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    update(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="pizza-container">
      <header>
        <h2>Build Your Own Pizza</h2>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
      </header>
      <form className="form contanier" onSubmit={onSubmit}>
        <StyledInputs>
          {/*///Text Input///*/}
          <StyledLabel>
            Name on order
            <input
              type="text"
              name="name"
              onChange={onChange}
              placeholder="Name"
              minLength="2"
            />
          </StyledLabel>
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
            <h4>Toppings</h4>
            <StyledToppings>
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
              <label>
                Mushrooms
                <input
                  type="checkbox"
                  name="mushrooms"
                  checked={values.mushrooms}
                  onChange={onChange}
                />
              </label>
            </StyledToppings>
          </div>
          <div className="instructions">
            <StyledLabel>
              Special Instruction
              <input
                type="text"
                name="instructions"
                value={values.instructions}
                onChange={onChange}
              />
            </StyledLabel>
          </div>
          <div className="submit">
            <button disabled={disabled}>Add to order</button>
          </div>
        </StyledInputs>
      </form>
    </div>
  );
}
