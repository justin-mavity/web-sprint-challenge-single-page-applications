import { v4 as uuid } from "uuid";

const initialOrdeList = [
  {
    id: uuid(),
    name: "",
    size: "",
    toppings: "",
    instructions: "",
  },
];

export default {
  get() {
    return Promise.resolve({
      status: 200,
      success: true,
      data: initialOrdeList,
    });
  },
  post(url, { name, size, toppings, instructions }) {
    const newOrder = { id: uuid(), name, size, toppings, instructions };
    return Promise.resolve({ status: 200, success: true, data: newOrder });
  },
};
