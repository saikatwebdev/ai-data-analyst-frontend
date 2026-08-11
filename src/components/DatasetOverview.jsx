import StatCard from "./StatCard";

function DatasetOverview({ analysis }) {
  const summary = analysis.summary;
  const profile = analysis.profile;

  return (
    <div>
      <div>
        <StatCard
          title="Rows"
          value={summary.rows}
        />

        <StatCard
          title="Columns"
          value={summary.columns}
        />

        <StatCard
          title="Numerical Columns"
          value={profile.numerical_columns.length}
        />

        <StatCard
          title="Categorical Columns"
          value={profile.categorical_columns.length}
        />
      </div>
    </div>
  );
}

export default DatasetOverview;