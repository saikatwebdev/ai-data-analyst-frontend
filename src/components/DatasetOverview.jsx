import StatCard from "./StatCard";

function DatasetOverview({ analysis }) {
  const summary = analysis.summary;
  const profile = analysis.profile;

  const missingCount =
    Object.values(
      profile.missing_values || {}
    ).reduce(
      (total, value) => total + value,
      0
    );

  return (
    <div className="stat-grid">
      <StatCard
        title="Rows"
        value={summary.rows.toLocaleString()}
      />

      <StatCard
        title="Columns"
        value={summary.columns}
      />

      <StatCard
        title="Numerical Columns"
        value={
          profile.numerical_columns.length
        }
      />

      <StatCard
        title="Missing Values"
        value={missingCount}
      />
    </div>
  );
}

export default DatasetOverview;