import { useState, useEffect } from 'react';
import './dashboard.css';

export default function Dashboard({ userName }) {
  const [streak, setStreak] = useState(0);
  const [intake, setIntake] = useState(0);
  const goal = 100;

  useEffect(() => {
    const today = new Date().toLocaleDateString();

    // Streak logic
    const savedStreak = JSON.parse(localStorage.getItem('streak') || '{"days":0,"lastDate":""}');
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toLocaleDateString();

    let newStreak;
    if (savedStreak.lastDate === today) {
      newStreak = savedStreak.days;
    } else if (savedStreak.lastDate === yesterdayStr) {
      newStreak = savedStreak.days + 1;
    } else {
      newStreak = 1;
    }
    localStorage.setItem('streak', JSON.stringify({ days: newStreak, lastDate: today }));
    setStreak(newStreak);

    // Intake resets every 24 hours
    const savedIntake = JSON.parse(localStorage.getItem('intake') || '{"oz":0,"date":""}');
    if (savedIntake.date === today) {
      setIntake(savedIntake.oz);
    } else {
      localStorage.setItem('intake', JSON.stringify({ oz: 0, date: today }));
      setIntake(0);
    }
  }, []);

  function logWater() {
    const today = new Date().toLocaleDateString();
    const newIntake = intake + 8;
    localStorage.setItem('intake', JSON.stringify({ oz: newIntake, date: today }));
    setIntake(newIntake);
  }

  return (
    <main className="container-fluid">
      <div className="text-center my-3">
        <h2 className="fw-bold">{userName ? `${userName}'s ${streak} consecutive day${streak !== 1 ? 's' : ''}` : `${streak} consecutive day${streak !== 1 ? 's' : ''}`}</h2>
      </div>
      <div className="dashboard-grid">

        {/* Left: Progress + Tree */}
        <div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Today's Progress</h5>
              <label className="form-label">Hydration Goal ({intake} / {goal} oz)</label>
              <div className="progress mb-3" style={{ height: '22px' }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${Math.min((intake / goal) * 100, 100)}%` }}
                  aria-valuenow={intake}
                  aria-valuemin="0"
                  aria-valuemax={goal}
                >
                  {Math.min(Math.round((intake / goal) * 100), 100)}%
                </div>
              </div>
              <span className="badge bg-success mb-2">🔥 {streak}-Day Streak</span>
              <button className="btn btn-primary ms-2" onClick={logWater}>+ Log Water Intake</button>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Virtual Tree</h5>
              <div>
                <p>Your tree grows as you stay hydrated!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Notifications + Stats */}
        <div>
<div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Stats</h5>
              <ul className="list-unstyled">
                <li>📅 Current streak: <strong></strong></li>
                <li>💧 Total this week: <strong></strong></li>
                <li>🌳 Tree level: <strong></strong></li>
                <li>🏅 Rank: <strong></strong></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
