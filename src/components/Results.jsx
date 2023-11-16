import React from "react";

function Results({ result }) {
  return (
    <h3 style={{ color: "red" }}>
      {result ? "The card is valid." : "The card is NOT valid."}
    </h3>
  );
}

export default Results;
