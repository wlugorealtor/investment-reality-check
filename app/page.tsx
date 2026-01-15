export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Investment Reality Check</h1>
      <p>
        See how much you should realistically invest based on your income,
        expenses, and goals.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Start My Reality Check
      </button>
    </main>
  );
}
