import { useState } from "react";

function SearchScores() {
  const [regNumber, setRegNumber] = useState("");
  const [scoreData, setScoreData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!regNumber.trim()) {
      alert("Please enter a registration number.");
      return;
    }

    setLoading(true);
    setError(null);
    setScoreData(null);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/diem-thi/sbd/${regNumber.trim()}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Failed to fetch data");
      }
      setScoreData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Search Score</h5>
          <div className="row g-2 align-items-center">
            <div className="col-md-6">
              <label htmlFor="reg-number" className="form-label">
                Registration Number
              </label>
              <input
                id="reg-number"
                type="text"
                className="form-control"
                placeholder="Enter registration number"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-dark mt-4 w-100"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">Error: {error}</div>}

      {scoreData && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Detailed Scores for SBD: {scoreData.sbd}
            </h5>
            <ul className="list-group list-group-flush">
              {Object.entries(scoreData).map(([subject, score]) => {
                if (subject === "sbd" || subject === "ma_ngoai_ngu")
                  return null;
                return (
                  <li
                    key={subject}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <span className="text-capitalize">
                      {subject.replace(/_/g, " ")}
                    </span>
                    <strong>{score !== null ? score : "N/A"}</strong>
                  </li>
                );
              })}
              <li className="list-group-item d-flex justify-content-between">
                <span>Language Code</span>
                <strong>{scoreData.ma_ngoai_ngu}</strong>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchScores;
