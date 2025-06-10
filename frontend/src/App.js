import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SearchScores from "./pages/SearchScores";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { ReportProvider } from "./contexts/ReportContext";

function App() {
  return (
    <ReportProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search-scores" element={<SearchScores />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </ReportProvider>
  );
}

export default App;
