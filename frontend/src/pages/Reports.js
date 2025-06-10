import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useReportData } from '../contexts/ReportContext';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"];
const LEVEL_LABELS = [">= 8", "6 - < 8", "4 - < 6", "< 4"];

function Reports() {
  const { reportData, loading } = useReportData();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Subject-wise Score Level Distribution</h2>
      <div className="row">
        {Object.entries(reportData).map(([subject, levels]) => {
          const chartData = {
            labels: LEVEL_LABELS,
            datasets: [
              {
                data: LEVEL_LABELS.map(label => levels[label] || 0),
                backgroundColor: COLORS,
                borderWidth: 1,
              },
            ],
          };

          return (
            <div key={subject} className="col-md-4 mb-4">
              <div className="card p-3 shadow-sm">
                <h5 className="text-center text-capitalize">{subject.replace('_', ' ')}</h5>
                <Pie data={chartData} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reports;