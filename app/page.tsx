export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Investment Reality Check</h1>

      <p>
        Answer a few questions and see what’s realistic for your money — 
        no hype, no guesswork.
      </p>

      <form>
        <label>
          Monthly Income ($)
          <br />
          <input type="number" placeholder="5000" />
        </label>

        <br /><br />

        <label>
          Monthly Expenses ($)
          <br />
          <input type="number" placeholder="3500" />
        </label>

        <br /><br />

        <label>
          Investment Goal
          <br />
          <select>
            <option>Long-term growth</option>
            <option>Passive income</option>
            <option>Buying a home</option>
          </select>
        </label>

        <br /><br />

        <button type="button">
          Get My Reality Check
        </button>
      </form>
    </main>
  );
}

