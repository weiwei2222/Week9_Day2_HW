import { useState } from "react";
import "./App.css";

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
    let number = [];
    for (let i = 0; i < userNum.length; i++) {
      let splitNum = [];
      splitNum = userNum[i].split("");
      number.push(...splitNum);
    }
    console.log(number);

    let ss = [];
    for (let i = 0; i < number.length; i++) {
      let numList = [];
      numList = Number(number[i]);
      ss.push(numList);
    }
    console.log(ss);

    const totalNum = ss.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(totalNum);
  }

  return (
    <>
      <h1>Please enters a credit card </h1>
      <form>
        <input type="number" onChange={handleChange} value={userInput} />
        <button onClick={checkCard}>check card</button>
      </form>
    </>
  );
}

export default App;
