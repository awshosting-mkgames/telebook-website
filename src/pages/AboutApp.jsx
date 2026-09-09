import React from "react";

const styles = `
  .telebook-about {
    --primary-color: #0088cc;
    --text-color: #333333;
    --bg-color: #f4f7f9;
    --card-bg: #ffffff;
    --border-color: #e0e0e0;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
    margin: 0;
    padding: 20px;
  }

  .telebook-about *,
  .telebook-about *::before,
  .telebook-about *::after {
    box-sizing: border-box;
  }

  .telebook-about .container {
    max-width: 650px;
    margin: 40px auto;
    background: var(--card-bg);
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--border-color);
  }

  .telebook-about header {
    border-bottom: 2px solid var(--bg-color);
    padding-bottom: 16px;
    margin-bottom: 24px;
  }

  .telebook-about h1 {
    color: var(--primary-color);
    margin: 0 0 8px 0;
    font-size: 1.8rem;
  }

  .telebook-about .subtitle {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
  }

  .telebook-about h2 {
    font-size: 1.25rem;
    color: #222;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  .telebook-about ul {
    padding-left: 20px;
    margin: 0 0 16px 0;
  }

  .telebook-about li {
    margin-bottom: 6px;
  }

  .telebook-about .meta-info {
    background-color: var(--bg-color);
    padding: 16px;
    border-radius: 8px;
    margin-top: 24px;
  }

  .telebook-about .meta-info p {
    margin: 4px 0;
    font-size: 0.95rem;
  }

  .telebook-about footer {
    margin-top: 24px;
    text-align: center;
    font-size: 0.85rem;
    color: #777;
    border-top: 1px solid var(--border-color);
    padding-top: 16px;
  }
`;

export default function AboutApp() {
  return (
    <div className="telebook-about">
      <style>{styles}</style>

      <main className="container">
        <header>
          <h1>Telebook</h1>
          <p className="subtitle">About App</p>
        </header>

        <section>
          <h2>Welcome to Telebook</h2>
          <p>
            Telebook is a messaging and communication platform owned and operated by{" "}
            <strong>Vijay</strong>. The app is designed to help users communicate securely through
            messaging and other supported communication features.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our goal is to provide a fast, secure, and reliable communication platform while
            respecting user privacy and maintaining a safe environment for everyone.
          </p>
        </section>

        <section>
          <h2>Main Features</h2>
          <ul>
            <li>Secure user registration</li>
            <li>Private messaging</li>
            <li>Group chats</li>
            <li>Voice and video calling (if available)</li>
            <li>Photo, video, and document sharing</li>
            <li>User profile management</li>
            <li>Notifications</li>
          </ul>
        </section>

        <section>
          <h2>Safe Use</h2>
          <p>
            Telebook is intended for lawful and respectful use. Users must not use the app for
            harassment, fraud, spam, illegal activities, or any activity that harms other users.
          </p>
        </section>

        <div className="meta-info">
          <p>
            <strong>App Name:</strong> Telebook
          </p>
          <p>
            <strong>Owner:</strong> Vijay
          </p>
        </div>

        <footer>
          <p>&copy; 2026 Telebook. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
