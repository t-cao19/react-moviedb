import React from "react";

import Result from "./Result";

function Results({ results }) {
  return (
    <section className="results">
      {results.map((results) => (
        <Result result={result} />
      ))}
    </section>
  );
}

export default Results;
