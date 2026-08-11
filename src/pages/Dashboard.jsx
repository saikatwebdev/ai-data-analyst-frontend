import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import Header from "../components/layout/Header";

import FileUpload from "../components/FileUpload";
import DatasetOverview from "../components/DatasetOverview";
import StatisticsTable from "../components/StatisticsTable";
import CategoryChart from "../components/CategoryChart";
import DataQuality from "../components/dashboard/DataQuality";
import OutlierSummary from "../components/dashboard/OutlierSummary";

function Dashboard() {
  const [dataset, setDataset] = useState(null);

  const analysis = dataset?.analysis;

  const categoricalAnalysis = analysis?.categoricals;

  const firstCategoricalColumn = categoricalAnalysis
    ? Object.keys(categoricalAnalysis)[0]
    : null;

  const categoryData = firstCategoricalColumn
    ? Object.entries(categoricalAnalysis[firstCategoricalColumn]).map(
        ([name, value]) => ({
          name,
          value,
        }),
      )
    : [];

  return (
    <DashboardLayout>
      <Header filename={dataset?.filename} />

      {!dataset && <FileUpload onUploadSuccess={setDataset} />}

      {analysis && (
        <>
          <DatasetOverview analysis={analysis} />
          <div className="dashboard-grid">
            <DataQuality profile={analysis.profile} />

            <OutlierSummary outliers={analysis.outliers} />
          </div>

          <StatisticsTable statistics={analysis.statistics} />

          <CategoryChart data={categoryData} />
        </>
      )}
    </DashboardLayout>
  );
}

export default Dashboard;
