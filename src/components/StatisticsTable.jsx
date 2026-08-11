function StatisticsTable({ statistics }) {
  const columns = Object.keys(statistics);

  return (
    <div>
      <h2>Numerical Statistics</h2>

      <table>
        <thead>
          <tr>
            <th>Column</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Std</th>
            <th>Min</th>
            <th>Max</th>
          </tr>
        </thead>

        <tbody>
          {columns.map((column) => {
            const stats = statistics[column];

            return (
              <tr key={column}>
                <td>{column}</td>
                <td>{stats.mean.toFixed(2)}</td>
                <td>{stats.median.toFixed(2)}</td>
                <td>{stats.std.toFixed(2)}</td>
                <td>{stats.min}</td>
                <td>{stats.max}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StatisticsTable;