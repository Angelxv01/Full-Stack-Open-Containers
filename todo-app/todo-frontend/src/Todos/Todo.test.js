import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Todo from "./Todo";

test("<Todo />", () => {
  let todo = {
    text: "This is a todo test",
    done: false,
  };

  const component = render(
    <Todo todo={todo} onClickDelete={() => {}} onClickComplete={() => {}} />
  );

  expect(component.container).toHaveTextContent("This is a todo test");
});
