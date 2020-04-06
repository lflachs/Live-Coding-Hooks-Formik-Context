import React from "react";

function useSearchCocktails(query) {
  const [loading, setLoading] = React.useState(true);
  const [cocktails, setCocktails] = React.useState([]);
  const fetchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

  React.useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data.drinks);
        setLoading(false);
      });
  }, [query]);

  return [cocktails, loading];
}

export default useSearchCocktails;
