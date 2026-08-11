import { useState } from "react";

import FileUpload from "../components/FileUpload";
import DatasetOverview from "../components/DatasetOverview";
import StatisticsTable from "../components/StatisticsTable";
import CategoryChart from "../components/CategoryChart";
import { TextAlignCenter } from "lucide-react";



function Dashboard() {
    const [dataset, setDataset] = useState(null);

    const categoricalAnalysis =
        dataset?.analysis?.categoricals;

    const firstCategoricalColumn =
        categoricalAnalysis
            ? Object.keys(categoricalAnalysis)[0]
            : null;

    const categoryData =
        firstCategoricalColumn
            ? Object.entries(
                categoricalAnalysis[
                firstCategoricalColumn
                ]
            ).map(([name, value]) => ({
                name,
                value,
            }))
            : [];

    return (
        <div >
            <h1>AI Data Analyst</h1>
            <br />

            <h3>
                Upload a dataset and let the system analyze it.
            </h3>
            <br />

            <FileUpload
                onUploadSuccess={setDataset}
            />
            <br />
            <br />

            {dataset && (
                <>
                    <DatasetOverview
                        analysis={dataset.analysis}
                    />
                    <br />
                    <StatisticsTable
                        statistics={
                            dataset.analysis.statistics
                        }
                    />
                    <br />
                    <CategoryChart
                        data={categoryData}
                    />
                </>
            )}
        </div>
    );
}

export default Dashboard;