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

  .telebook-privacy h3 {
    font-size: 1.05rem;
    margin: 14px 0 6px;
  }

  .telebook-privacy p + ul,
  .telebook-privacy p + .table-wrap {
    margin-top: 8px;
  }

  .telebook-privacy .table-wrap {
    overflow-x: auto;
  }

  .telebook-privacy table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.92rem;
  }

  .telebook-privacy th,
  .telebook-privacy td {
    border: 1px solid var(--border-color);
    padding: 8px 10px;
    text-align: left;
    vertical-align: top;
  }

  .telebook-privacy th {
    background-color: var(--bg-color);
  }

  .telebook-privacy .todo {
    background: #fff3cd;
    padding: 0 4px;
    border-radius: 3px;
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

const permissions = [
  ["Contacts (read/write)", "Show your contacts, find which of them use Telebook, and save or invite a contact."],
  ["Camera", "Take photos/videos to send, and for video calls."],
  ["Microphone, audio settings, Bluetooth connect", "Record voice notes, make voice/video calls, and use headsets."],
  ["Photos, videos and audio (media) access, media location; storage on Android 12 and below", "Choose, send and save media and files."],
  ["Notifications, vibrate, wake lock", "Alert you to new messages and calls."],
  ["Full-screen intent, draw over other apps", "Show an incoming call on the full screen, including on the lock screen."],
  ["Foreground service (media playback)", "Keep voice-note and audio playback running."],
  ["Internet", "Connect to Telebook servers to send and receive data."],
];

const Todo = ({ children }) => <span className="todo">[{children}]</span>;

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
          Telebook (Android package com.Telebookapp.Telebook) is a messaging and social app
          offering one-to-one and group chats, broadcast lists, channels, status updates, voice
          and video calls. This policy explains what information we
          collect, how we use it and the choices you have. Operated by{" "}
          Telebook Services, Bapda Bhut Majra Road, Ladwa, Haryana 136132, India.
        </p>

        <section>
          <h2>Information We Collect</h2>
          <h3>Account and profile</h3>
          <ul>
            <li>Mobile number, used to log in with a one-time password (OTP).</li>
            <li>Name, optional "about" text and profile picture.</li>
            <li>Privacy settings (who can see your last seen/online, photo, about and status), language and theme preferences.</li>
          </ul>
          <h3>Contacts</h3>
          <ul>
            <li>With your permission, we read your phone contacts (name, phone number, photo).</li>
            <li>Phone numbers are sent to our servers to find out which contacts are registered on Telebook, and your contact list is cached on our servers. Contacts are also saved in a local database on your phone.</li>
            <li>You can start or stop contact sync from Settings → Sync Contacts, or remove the permission in Android settings at any time.</li>
          </ul>
          <h3>Your content</h3>
          <ul>
            <li>Messages, replies, reactions, starred and forwarded messages.</li>
            <li>Photos, videos, voice notes/audio and documents you send from the camera, gallery or file picker.</li>
            <li>Status updates, channel posts, broadcast messages, and group/channel details (name, icon, members, subscribers).</li>
          </ul>
          <h3>Calls</h3>
          <ul>
            <li>Call history (who, when, duration, missed) is stored on our servers. Call audio/video is transmitted through Agora's servers.</li>
          </ul>
          <h3>Device and technical data</h3>
          <ul>
            <li>Push notification (FCM) token, device ID (install ID) and device type, used for notifications and to show your logged-in devices.</li>
            <li>Notification and auto-reply settings, your blocked-users list, and reports you file against users or channels.</li>
            <li>Server logs: our servers write application logs (console and process-manager log files) used for troubleshooting and security. These may include technical request details such as IP address. Telebook does not use any crash-reporting or analytics SDK.</li>
          </ul>
          <h3>Stored on your phone</h3>
          <ul>
            <li>Chats, messages and contacts cache in a local database, and your login token, profile and settings in app storage. Android cloud backup is disabled for the app.</li>
          </ul>
          <h3>Location</h3>
          <p>Telebook does not ask for or collect your location.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Create and manage your account and verify you by OTP.</li>
            <li>Deliver messages, media, calls, statuses and channels.</li>
            <li>Show which of your contacts are on Telebook.</li>
            <li>Send notifications and show incoming calls.</li>
            <li>Keep the service secure and prevent spam, fraud, abuse and illegal activity, including acting on reports.</li>
            <li>Respond to support requests.</li>
          </ul>
        </section>

        <section>
          <h2>Consent and Legal Basis</h2>
          <p>
            We process your personal data based on your consent, given when you register and when
            you grant permissions such as contacts, camera or microphone, and for the lawful
            purposes permitted under India's Digital Personal Data Protection Act, 2023. You can
            withdraw consent by removing permissions in Android settings or by deleting your
            account; some features will then stop working.
          </p>
        </section>

        <section>
          <h2>Sharing and Third Parties</h2>
          <ul>
            <li>Your messages and media are shared only with the users, groups or channels you send them to. Channels can be public, and public posts can be seen by anyone.</li>
            <li>Service providers that process data only to run the service: Google Firebase Cloud Messaging (push notifications) and Agora (voice/video calls). See their own privacy policies for details.</li>
            <li>DV Hosting (SMS provider that delivers your OTP), and Amazon Web Services S3 (media storage, Mumbai, India region).</li>
            <li>Legal requests: we share data with law-enforcement or courts only on a valid legal order, and only the data required by it.</li>
            <li>Telebook contains no advertising, analytics or cross-app tracking SDKs. Firebase is used only for push notifications. We do not sell your personal data.</li>
          </ul>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We keep your data while your account is active. When you delete your account, your
            data is removed, other users see you as "Deleted account", and your number can be
            registered again. Your data is deleted from our servers within 30 days of deletion. Server logs are kept only as long as needed for troubleshooting and security.
          </p>
        </section>

        <section>
          <h2>Your Rights and Controls</h2>
          <ul>
            <li>Delete your account: Settings → Delete Account.</li>
            <li>Log out, clear all data, clear a chat, and delete messages (for me / for everyone).</li>
            <li>Control last seen, profile photo, about and status visibility; block or unblock users; report users or channels.</li>
            <li>View logged-in devices and revoke other devices.</li>
            <li>Turn contact sync on or off, and remove any permission in Android settings.</li>
            <li>To request access, correction or deletion of your data, email <a href="mailto:telebookservices@gmail.com">telebookservices@gmail.com</a>.</li>
          </ul>
        </section>

        <section id="delete-account">
          <h2>Account &amp; Data Deletion</h2>
          <h3>In the app</h3>
          <p>Open Telebook → Settings → Delete Account and confirm.</p>
          <h3>Without the app</h3>
          <p>
            Fill in the request form at{" "}
            <a href="https://www.telebookservices.com/delete-account">https://www.telebookservices.com/delete-account</a>.
            You can also email <a href="mailto:telebookservices@gmail.com">telebookservices@gmail.com</a> with
            your registered mobile number.
          </p>
          <h3>What is deleted and what is kept</h3>
          <p>
            Your account data is deleted from our servers within 30 days. For legal and safety
            reasons, user conversations are retained for 1 year after deletion, in encrypted form,
            and then deleted.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Telebook is intended for users aged 18 and above.
            We do not knowingly collect personal data from anyone under 18. If you believe
            a child has given us personal data, contact us and we will delete it.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We use reasonable technical and organisational measures to protect your information,
            but no system is 100% secure. What we do and what you can do:
          </p>
          <ul>
            <li>Login uses mobile number and OTP, and every request is authenticated with a token.</li>
            <li>Data in transit: the app connects to our servers at https://api.telebookservices.com, and data sent between the app and our servers is encrypted in transit (HTTPS).</li>
            <li>Messages are not end-to-end encrypted.</li>
            <li>Your login token is stored only on your device, and Android cloud backup is disabled.</li>
            <li>You can see logged-in devices, revoke other devices, log out, block and report users, and set privacy controls.</li>
            <li>Stored data on our servers is encrypted.</li>
            <li>Data breach: if a personal data breach occurs, we will notify affected users and the Data Protection Board of India as required by the DPDP Act, without undue delay.</li>
          </ul>
        </section>

        <section>
          <h2>International Transfers</h2>
          <p>
            Some providers (such as Agora and Firebase) may process data outside India.
            Our servers and media storage are located in India.
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
          <h2>Android Permissions</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Permission</th><th>Why we need it</th></tr>
              </thead>
              <tbody>
                {permissions.map(([name, why]) => (
                  <tr key={name}><td>{name}</td><td>{why}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Policy Updates</h2>
          <p>
            We may update this policy from time to time. The latest version will always be
            available within the app and on our website.
          </p>
        </section>

        <section>
          <h2>Contact and Grievance Officer</h2>
          <p>For privacy questions, data requests or complaints, contact us:</p>
          <div className="contact-box">
            <strong>Telebook Support</strong>
            <br />
            Email: <a href="mailto:telebookservices@gmail.com">telebookservices@gmail.com</a>
            <br />
            Grievance Officer: Vijay, Telebook Services - <a href="mailto:telebookservices@gmail.com">telebookservices@gmail.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}
