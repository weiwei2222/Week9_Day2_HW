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
      for (let i = 0; i < userNum.length; i++) {
        userNum[i] = userNum[i].toString();
      }
    }
    console.log(userNum);

    let number = [];
    userNum.forEach((num) => {
      let splitNum = [];
      splitNum = num.split("");
      number.push(...splitNum);
    });
    console.log(number);

    let numArray = number.map((num) => Number(num));
    console.log(numArray);

    const totalNum = numArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
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
