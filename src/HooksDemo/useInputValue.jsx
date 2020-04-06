import { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  // ""
  return {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
  };
};

export default useInputValue;
