import './about.css';

export default function About() {
  return (
    <main className="container-fluid text-center" style={{ padding: '1rem 2rem' }}>
      <div>
        <h2 className="pt-3" style={{ color: '#1a237e' }}>What is Drinkly?</h2>
        <p style={{ color: '#1565c0', maxWidth: '500px', margin: '0 auto 1rem' }}>
          Drinkly is a gamified water intake tracker that turns hydration into a daily streak game.
          Log water with a single tap and watch your virtual tree grow with animations as you hit
          your personalized goals. Earn fruit rewards, unlock new tree species, and compete with
          friends on a realtime leaderboard.
        </p>

        <h4 className="mt-4" style={{ color: '#1a237e' }}>Key Features</h4>
        <div className="features-grid text-start" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="feature-card">🔐 Secure login &amp; registration</div>
          <div className="feature-card">🎯 Personalized daily goals</div>
          <div className="feature-card">💧 One-tap water logging</div>
          <div className="feature-card">🌳 Animated tree growth</div>
          <div className="feature-card">🔥 Streak tracking</div>
          <div className="feature-card">🍎 Fruit rewards</div>
          <div className="feature-card">🌲 Unlockable tree types</div>
          <div className="feature-card">🏆 Weekly leaderboard</div>
          <div className="feature-card">⚡ Realtime WebSocket updates</div>
        </div>

        <div className="quote-box text-start mx-auto mt-4 mb-4" style={{ maxWidth: '500px' }}>
          <p className="mb-0">"Water is the driving force of all nature." — Placeholder for ZenQuotes API</p>
        </div>
      </div>
    </main>
  );
}
