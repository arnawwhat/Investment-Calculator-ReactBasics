export default function UserInput({ onChangeInput, userinput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userinput.initialInvestment}
            onChange={(event) => {
              onChangeInput("initialInvestment", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userinput.annualInvestment}
            onChange={(event) => {
              onChangeInput("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={userinput.expectedReturn}
            onChange={(event) => {
              onChangeInput("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userinput.duration}
            onChange={(event) => {
              onChangeInput("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
