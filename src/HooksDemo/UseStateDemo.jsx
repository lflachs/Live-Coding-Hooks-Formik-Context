import React, { useState } from "react";

function useStateDemo() {
  const [name, setName] = useState("Leo");

  // this.state = {
  //       name:"Leo"
  //   }
  // this.setState({name:"bob"})
  return <h1 onClick={() => setName("Bob")}>{name}</h1>;
}

export default useStateDemo;
