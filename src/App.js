import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results.jsx";
import { useState } from "react";
function App() {
  const [userinput, setuserinput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userinput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setuserinput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    }); // koi bhi input ho usko set kardega
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userinput={userinput} />
      {inputIsValid && <Results input={userinput} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
