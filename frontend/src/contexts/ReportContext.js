import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reportData, setReportData] = useState(() => {
    const cached = localStorage.getItem('reportData');
    return cached ? JSON.parse(cached) : null;
  });

  const [loading, setLoading] = useState(!reportData);

  useEffect(() => {
    if (!reportData) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/diem-thi/report/score-levels-by-subject`)
        .then((res) => {
          setReportData(res.data);
          localStorage.setItem('reportData', JSON.stringify(res.data));
          setLoading(false);
        })
        .catch((err) => {
          console.error('Fetch failed:', err);
          setLoading(false);
        });
    }
  }, [reportData]);

  return (
    <ReportContext.Provider value={{ reportData, loading }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReportData = () => useContext(ReportContext);