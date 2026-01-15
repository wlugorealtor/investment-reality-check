export default function Home() {
  return (
    <main style={{ 
      maxWidth: "600px", 
      margin: "60px auto", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <h1>Investment Reality Check</h1>

      <p>
        Enter your monthly income and expenses to see
        how much you can realistically invest.
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

        <button type="submit">
          Check My Reality
        </button>
      </form>
    </main>
  );
}
