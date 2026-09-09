import React from "react";

const styles = `
  .telebook-privacy {
    --primary-color: #0088cc;
    --text-color: #222222;
    --bg-color: #f4f6f8;
    --card-bg: #ffffff;
    --border-color: #e0e0e0;
    --muted-text: #666666;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
    padding: 24px 16px;
  }

  .telebook-privacy *,
  .telebook-privacy *::before,
  .telebook-privacy *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .telebook-privacy .container {
    max-width: 760px;
    margin: 0 auto;
    background: var(--card-bg);
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .telebook-privacy header {
    border-bottom: 2px solid var(--bg-color);
    padding-bottom: 20px;
    margin-bottom: 28px;
  }

  .telebook-privacy h1 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 6px;
  }

  .telebook-privacy .effective-date {
    font-size: 0.9rem;
    color: var(--muted-text);
    font-weight: 500;
  }

  .telebook-privacy .intro {
    font-size: 1.05rem;
    margin-bottom: 24px;
  }

  .telebook-privacy section {
    margin-bottom: 24px;
  }

  .telebook-privacy h2 {
    font-size: 1.25rem;
    margin-bottom: 10px;
    color: #111111;
  }

  .telebook-privacy ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  .telebook-privacy li {
    margin-bottom: 8px;
  }

  .telebook-privacy .contact-box {
    background-color: var(--bg-color);
    padding: 16px 20px;
    border-radius: 8px;
    margin-top: 12px;
    border-left: 4px solid var(--primary-color);
  }

  .telebook-privacy .contact-box a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
  }

  .telebook-privacy .contact-box a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .telebook-privacy .container {
      padding: 24px 20px;
    }

    .telebook-privacy h1 {
      font-size: 1.6rem;
    }

    .telebook-privacy h2 {
      font-size: 1.1rem;
    }
  }
`;

export default function PrivacyPolicy() {
  return (
    <div className="telebook-privacy">
      <style>{styles}</style>

      <main className="container">
        <header>
          <h1>Telebook – Privacy Policy</h1>
          <p className="effective-date">Effective Date: July 22, 2026</p>
        </header>

        <p className="intro">
          Telebook respects your privacy and is committed to protecting your personal information.
        </p>

        <section>
          <h2>Information We Collect</h2>
          <p>Depending on the features you use, Telebook may collect:</p>
          <ul>
            <li>Mobile number for account verification.</li>
            <li>Profile name and profile photo.</li>
            <li>Messages and shared media as required to provide the service.</li>
            <li>Device and app information.</li>
            <li>Crash reports and diagnostic information.</li>
            <li>Notification tokens.</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Deliver messaging and communication services.</li>
            <li>Improve app performance and security.</li>
            <li>Prevent spam, fraud, abuse, and illegal activities.</li>
            <li>Respond to user support requests.</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your information
            from unauthorized access, loss, or misuse.
          </p>
        </section>

        <section>
          <h2>Account Suspension</h2>
          <p>
            If a user violates our Terms or uses Telebook for illegal or abusive purposes, we may
            suspend or permanently delete the account and remove related content where
            appropriate.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Telebook may use trusted third-party services such as Firebase or other service
            providers to operate and improve the app.
          </p>
        </section>

        <section>
          <h2>Account & Data Deletion</h2>
          <p>
            Users may request account and eligible data deletion through the account deletion
            option in the app or by contacting Telebook support.
          </p>
        </section>

        <section>
          <h2>Children’s Privacy</h2>
          <p>
            Telebook is not intended for users who are below the minimum legal age required in
            their jurisdiction.
          </p>
        </section>

        <section>
          <h2>Policy Updates</h2>
          <p>
            This Privacy Policy may be updated from time to time. The latest version will always
            be available within the app.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For privacy-related questions or data deletion requests, contact Telebook through the official support email.</p>
          <div className="contact-box">
            <strong>Telebook Support</strong>
            <br />
            Email: <a href="mailto:Telebookservices@gmail.com">Telebookservices@gmail.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}
