import React from "react";
import { MyContext } from "./MyContext";
import ChildContext from "./Child";

function DemoContext() {
  return (
    <MyContext.Provider
      value={{
        primaryColor: "lightblue",
        secondary: "lightyellow",
      }}
    >
      <ChildContext />
    </MyContext.Provider>
  );
}
export default DemoContext;
