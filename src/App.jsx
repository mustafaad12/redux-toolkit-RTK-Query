import React from "react";

import { useGetAllProductsQuery } from "./services/productApi";

const App = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  console.log(data);

  return (
    <>
      {error ? (
        <h1>there is an error</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>data...</h1>
      )}
    </>
  );
};

export default App;
