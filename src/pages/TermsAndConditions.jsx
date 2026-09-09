import React from "react";

const styles = `
  .telebook-terms {
    --primary-color: #2a65a0;
    --text-color: #333333;
    --bg-color: #f4f6f8;
    --card-bg: #ffffff;
    --border-color: #e2e8f0;
    --alert-bg: #fff5f5;
    --alert-border: #feb2b2;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
    padding: 40px 20px;
  }

  .telebook-terms *,
  .telebook-terms *::before,
  .telebook-terms *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .telebook-terms .terms-container {
    max-width: 800px;
    margin: 0 auto;
    background: var(--card-bg);
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--border-color);
  }

  .telebook-terms .terms-header {
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 20px;
    margin-bottom: 30px;
  }

  .telebook-terms h1 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 8px;
  }

  .telebook-terms .effective-date {
    font-size: 0.95rem;
    color: #666;
    font-weight: 500;
  }

  .telebook-terms .intro-text {
    font-size: 1.05rem;
    margin-bottom: 30px;
  }

  .telebook-terms section {
    margin-bottom: 28px;
  }

  .telebook-terms h2 {
    font-size: 1.25rem;
    color: var(--primary-color);
    margin-bottom: 10px;
  }

  .telebook-terms p {
    font-size: 1rem;
    color: #4a5568;
  }

  .telebook-terms ul {
    margin-left: 20px;
    margin-top: 10px;
  }

  .telebook-terms li {
    margin-bottom: 8px;
    color: #4a5568;
  }

  .telebook-terms .warning-box {
    background-color: var(--alert-bg);
    border-left: 4px solid var(--alert-border);
    padding: 16px;
    border-radius: 4px;
  }

  @media (max-width: 600px) {
    .telebook-terms {
      padding: 15px;
    }

    .telebook-terms .terms-container {
      padding: 20px;
    }

    .telebook-terms h1 {
      font-size: 1.6rem;
    }
  }
`;

export default function TermsAndConditions() {
  return (
    <div className="telebook-terms">
      <style>{styles}</style>

      <main className="terms-container">
        <header className="terms-header">
          <h1>Telebook – Terms & Conditions</h1>
          <p className="effective-date">Effective Date: July 22, 2026</p>
        </header>

        <p className="intro-text">
          By using Telebook, you agree to the following Terms and Conditions.
        </p>

        <section>
          <h2>1. Eligibility</h2>
          <p>You must comply with the laws applicable in your country while using Telebook.</p>
        </section>

        <section>
          <h2>2. User Responsibility</h2>
          <p>
            You are responsible for your account, your activity, and any content you upload or
            share through Telebook.
          </p>
        </section>

        <section>
          <h2>3. Prohibited Activities</h2>
          <p>The following are strictly prohibited:</p>
          <ul>
            <li>Sending spam or bulk messages.</li>
            <li>Sharing illegal, abusive, threatening, hateful, or obscene content.</li>
            <li>Fraud, impersonation, phishing, or identity theft.</li>
            <li>Hacking, malware distribution, or unauthorized access.</li>
            <li>Copyright infringement.</li>
            <li>Any activity that violates applicable law.</li>
          </ul>
        </section>

        <section className="warning-box">
          <h2>4. Account Suspension or Ban</h2>
          <p>
            Telebook reserves the right to suspend, restrict, or permanently terminate any
            account, with or without prior notice, if it is believed that the user has violated
            these Terms, misused the platform, or engaged in illegal or harmful activity.
          </p>
        </section>

        <section>
          <h2>5. Content Removal</h2>
          <p>
            Telebook may remove any content that violates these Terms, applicable laws, or the
            safety of other users.
          </p>
        </section>

        <section>
          <h2>6. Privacy</h2>
          <p>Your use of Telebook is also governed by the Telebook Privacy Policy.</p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            Telebook provides the service on an “as available” basis. To the extent permitted by
            law, Telebook is not responsible for indirect or consequential losses arising from the
            use of the service.
          </p>
        </section>

        <section>
          <h2>8. Changes</h2>
          <p>
            Telebook may modify these Terms at any time. Continued use of the app after changes
            means you accept the updated Terms.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            For support or legal questions, contact Telebook using the support email provided
            within the app or on the official website.
          </p>
        </section>
      </main>
    </div>
  );
}
