import { useState } from "react";
import "./App.css";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState(0);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  function checkCard(event) {
    event.preventDefault();
    const userNum = userInput.split("");
    for (let i = userNum.length - 2; i >= 0; i -= 2) {
      userNum[i] = userNum[i] * 2;
    }
    console.log(userNum);

    // use Regular expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    // \d find a number, Matches any character that is not a digit (Arabic numeral).
    //  Equivalent to [^0-9]. For example, /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".
    // /g Global search
    // ["2","6","4",18,"4"] will be ["2","4","1","8","4"]
    let number = (userNum + "").replace(/\D+/g, "").split("");
    console.log(number);

    let numArray = number.map((num) => Number(num));
    console.log(numArray);

    const totalNum = numArray.reduce((acc, current) => acc + current, 0);
    console.log(totalNum);

    if (totalNum % 10 == 0) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }

  return (
    <>
      <h1>Please enters a credit card </h1>
      <form>
        <input type="number" onChange={handleChange} value={userInput} />
        <button onClick={checkCard}>check card</button>
        <Results />
      </form>
    </>
  );
}

export default App;
