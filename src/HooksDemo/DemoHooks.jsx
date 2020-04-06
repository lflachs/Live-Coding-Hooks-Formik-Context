import React from "react";
import UseStateDemo from "./UseStateDemo";
import DemoUseEffect from "./DemoUseEffect";
import useSearchCocktails from "./useCocktail";
import useInputValue from "./useInputValue";

function DemoHooks() {
  // const [query, setQuery] = React.useState("margarita");
  // const [cocktails, loading] = useSearchCocktails(query);
  const firstName = useInputValue("");
  const lastName = useInputValue("");

  const object = {
    value: "value",
    onChange: (e) => console.log(e.target.value),
  };

  return (
    <div>
      <input type="text" placeholder="first name" {...firstName} />
      <input type="text" placeholder="last name" {...lastName} />

      {/* <input
        type="text"
        placeholder="first name"
        value=""
        onChange={(event) => setFirstName(event.target.value)}
      /> */}
      {/* <UseStateDemo /> */}
      {/* <DemoUseEffect /> */}
      {/* <div>
        {loading ? (
          <h1>...Cocktails are coming...</h1>
        ) : (
          cocktails.map((cocktail) => <h1>{cocktail.strDrink}</h1>)
        )}
      </div>
      <button onClick={() => setQuery("Long island")}>
        Show me something else
      </button>*/}
    </div>
  );
}
export default DemoHooks;
