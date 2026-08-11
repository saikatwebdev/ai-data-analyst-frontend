function OutlierSummary({ outliers }) {
  const entries = Object.entries(
    outliers || {}
  );

  return (
    <div className="panel">
      <h2>Outlier Detection</h2>

      {entries.length === 0 ? (
        <p>No numerical outliers detected.</p>
      ) : (
        entries.map(
          ([column, data]) => (
            <div
              className="quality-row"
              key={column}
            >
              <span>{column}</span>

              <strong>
                {data.outlier_count}
              </strong>
            </div>
          )
        )
      )}
    </div>
  );
}

export default OutlierSummary;