import logo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Money bag" />
      <h1>Investement Calculator</h1>
    </header>
  );
}
