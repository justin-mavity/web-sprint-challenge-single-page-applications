import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

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
        <Form>
          <FormGroup>
            {/*///Text Input///*/}
            <Label for="order-name">
              Name on order
              <Input
                type="text"
                name="name"
                onChange={onChange}
                placeholder="Name"
                minLength="2"
              />
            </Label>
          </FormGroup>
          {/*///Dropdown for size///*/}
          <FormGroup>
            <Label for="size">
              Choice of size
              <select
                type="select"
                name="size"
                value={values.size}
                onChange={onChange}
              >
                <option value="">---Select a size---</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Toppings:
              <label for="pepperoni">Pepperoni </label>
              <input
                type="checkbox"
                value="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
              />
              <label for="extraChesse">Extra Cheese </label>
              <input
                type="checkbox"
                value="extraCheese"
                checked={values.extraCheese}
                onChange={onChange}
              />
              <label for="onions">Onions </label>
              <input
                type="checkbox"
                value="onions"
                checked={values.onions}
                onChange={onChange}
              />
              <label for="greenPeppers">Green Peppers </label>
              <input
                type="checkbox"
                value="greenPeppers"
                checked={values.greenPeppers}
                onChange={onChange}
              />
              <label for="blackOlives">Black Olives </label>
              <input
                type="checkbox"
                value="blackOlives"
                checked={values.blackOlives}
                onChange={onChange}
              />
              <label for="mushrooms">Mushrooms </label>
              <input
                type="checkbox"
                value="mushrooms"
                checked={values.mushrooms}
                onChange={onChange}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="instructions" sm={1}>
              Special Instruction
            </Label>

            <Input
              type="text"
              name="instructions"
              value={values.instructions}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button id="submitBtn" disabled={disabled}>
                Add to order
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </form>
    </div>
  );
}
