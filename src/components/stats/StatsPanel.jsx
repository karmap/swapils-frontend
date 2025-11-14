import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import TwoColumnsLayout from "../layouts/TwoColumnsLayout";

const StatsPanel = () => {

  const [stats, setStats] = useState();
  const [health, setHealth] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE}/api/stats`);
        const statsData = await response.json();
        setStats(statsData);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    const fetchHealth = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE}/api/health`);
        const healthData = await response.json();
        setHealth(healthData);
      } catch (error) {
        console.error("Error fetching health:", error);
      }
    };
    fetchStats();
    fetchHealth();
  }, []);

  const healthColumnContent = (<pre>{JSON.stringify(health, null, 2)}</pre>);
  const statsColumnContent = (<pre>{JSON.stringify(stats, null, 2)}</pre>);

  return (
    <AppLayout>
        <TwoColumnsLayout title={"Application Stats"} colA={healthColumnContent} colB={statsColumnContent} />
    </AppLayout>
  )
}

export default StatsPanel;