function HomePage({ onLogout }) {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <h1 className="logo">CRM Dashboard</h1>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </nav>
      <main className="main-content">
        <h2>Welcome, adminnv 👋</h2>
        <p>
          This is your homepage. You can manage customers, products, and more
          here.
        </p>
      </main>
    </div>
  );
}

export default HomePage;
