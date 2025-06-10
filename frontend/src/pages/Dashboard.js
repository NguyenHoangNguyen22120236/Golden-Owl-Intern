import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/diem-thi/top-10-group-a`) // Make sure this is your actual API route
      .then((res) => {
        setStudents(res.data.slice(0, 10)); // Get top 10 only
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch top students:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Top 10 Students - Group A (Math, Physics, Chemistry)</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Candidate ID (SBD)</th>
            <th>Math</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.sbd}>
              <td>{index + 1}</td>
              <td>{s.sbd}</td>
              <td>{s.toan}</td>
              <td>{s.vat_li}</td>
              <td>{s.hoa_hoc}</td>
              <td><strong>{s.total_score}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
