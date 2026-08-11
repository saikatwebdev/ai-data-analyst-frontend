function DataQuality({ profile }) {
  const missingCount =
    Object.values(
      profile.missing_values || {}
    ).reduce(
      (total, value) => total + value,
      0
    );

  return (
    <div className="panel">
      <h2>Data Quality</h2>

      <div className="quality-row">
        <span>Missing Values</span>
        <strong>{missingCount}</strong>
      </div>

      <div className="quality-row">
        <span>Duplicate Rows</span>
        <strong>
          {profile.duplicate_rows}
        </strong>
      </div>
    </div>
  );
}

export default DataQuality;