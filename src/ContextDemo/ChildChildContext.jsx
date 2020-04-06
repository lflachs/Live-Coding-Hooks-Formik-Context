import React from "react";
import { MyContext } from "./MyContext";

function ChildChildContext() {
  const theme = React.useContext(MyContext);
  console.log(theme);
  return (
    <div style={{ backgroundColor: theme.primaryColor }}>
      <h1 style={{ color: theme.secondary }}>Hello World</h1>
    </div>
  );
}

export default ChildChildContext;
