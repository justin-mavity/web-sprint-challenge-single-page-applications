import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("A name for the order is required"),
  size: yup.string().oneOf(["small", "medium", "large"], "size is required"),
  pepperoni: yup.boolean(),
  extraCheese: yup.boolean(),
  onions: yup.boolean(),
  greenPeppers: yup.boolean(),
  blackOlives: yup.boolean(),
  mushrooms: yup.boolean(),
  instructions: yup.string(),
});
