import './leaderboard.css';

export default function Leaderboard() {
  return (
    <main className="container-fluid text-center">
      <h2 className="pt-3" style={{ color: '#1a237e' }}>🏆 Weekly Hydration Leaderboard</h2>
      <p style={{ color: '#1565c0' }}>Compete with friends and see who stays the most hydrated!</p>

      <table className="table table-hover table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Total Intake (oz)</th>
            <th>Streak (days)</th>
            <th>Tree</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </main>
  );
}
