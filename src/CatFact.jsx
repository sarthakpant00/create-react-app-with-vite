import { useEffect, useState } from "react";

function CatFact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact);
        setLoading(false);
      });
  }, []);

  return (
    <div className="cat-box">
      <h2>🐱 Random Cat Fact</h2>

      {loading ? <p>Loading...</p> : <p>{fact}</p>}
    </div>
  );
}

export default CatFact;