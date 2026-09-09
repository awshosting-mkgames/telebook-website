import React, { useState } from "react";

const styles = `
  .telebook-delete {
    min-height: 100vh;
    background-color: #f4f6f8;
    color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  .telebook-delete *,
  .telebook-delete *::before,
  .telebook-delete *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  .telebook-delete .form-container {
    background: #ffffff;
    width: 100%;
    max-width: 520px;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .telebook-delete .brand-title {
    font-size: 24px;
    font-weight: 700;
    color: #0088cc;
    margin-bottom: 4px;
  }

  .telebook-delete .form-title {
    font-size: 18px;
    font-weight: 600;
    color: #222222;
    margin-bottom: 6px;
  }

  .telebook-delete .effective-date {
    font-size: 12px;
    color: #666666;
    margin-bottom: 20px;
  }

  .telebook-delete .warning-box {
    background-color: #fff2f2;
    border-left: 4px solid #e53e3e;
    padding: 12px 16px;
    border-radius: 6px;
    margin-bottom: 24px;
  }

  .telebook-delete .warning-box p {
    font-size: 13px;
    color: #9b2c2c;
    line-height: 1.5;
  }

  .telebook-delete .form-group {
    margin-bottom: 18px;
  }

  .telebook-delete label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 6px;
  }

  .telebook-delete input[type="text"],
  .telebook-delete input[type="email"],
  .telebook-delete input[type="password"],
  .telebook-delete select,
  .telebook-delete textarea {
    width: 100%;
    padding: 10px 14px;
    font-size: 14px;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .telebook-delete input:focus,
  .telebook-delete select:focus,
  .telebook-delete textarea:focus {
    border-color: #0088cc;
  }

  .telebook-delete textarea {
    resize: vertical;
    min-height: 70px;
  }

  .telebook-delete .checkbox-group {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
  }

  .telebook-delete .checkbox-group input {
    margin-top: 3px;
    accent-color: #e53e3e;
  }

  .telebook-delete .checkbox-group label {
    font-size: 13px;
    font-weight: normal;
    color: #4a5568;
    line-height: 1.4;
  }

  .telebook-delete .button-group {
    display: flex;
    gap: 12px;
    margin-top: 24px;
  }

  .telebook-delete .btn {
    flex: 1;
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s ease;
  }

  .telebook-delete .btn-cancel {
    background-color: #edf2f7;
    color: #4a5568;
    text-decoration: none;
  }

  .telebook-delete .btn-cancel:hover {
    background-color: #e2e8f0;
  }

  .telebook-delete .btn-delete {
    background-color: #e53e3e;
    color: #ffffff;
  }

  .telebook-delete .btn-delete:hover:not(:disabled) {
    background-color: #c53030;
  }

  .telebook-delete .btn-delete:disabled {
    background-color: #f5a3a3;
    cursor: not-allowed;
  }
`;

export default function DeleteAccount({ onSubmitDelete, onCancel }) {
  const [form, setForm] = useState({
    fullName: "",
    accountIdentifier: "",
    password: "",
    reason: "",
    feedback: "",
    ackMessages: false,
    ackIrreversible: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your real delete-account endpoint, e.g.:
    // await fetch("/api/account/delete", { method: "POST", body: JSON.stringify(form) });
    if (onSubmitDelete) {
      onSubmitDelete(form);
    }
  };

  const canSubmit = form.ackMessages && form.ackIrreversible;

  return (
    <div className="telebook-delete">
      <style>{styles}</style>

      <div className="form-container">
        <div className="brand-title">Telebook</div>
        <h1 className="form-title">Delete Account Permanently</h1>
        <div className="effective-date">Effective Date: July 22, 2026</div>

        <div className="warning-box">
          <p>
            <strong>Warning:</strong> This action cannot be undone. Once submitted, your profile,
            messages, shared media, and contacts will be permanently deleted from Telebook
            servers.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. John Doe"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="accountIdentifier">Registered Email or Phone Number</label>
            <input
              type="text"
              id="accountIdentifier"
              name="accountIdentifier"
              placeholder="e.g. user@email.com or +123456789"
              value={form.accountIdentifier}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your current password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for leaving (Optional)</label>
            <select id="reason" name="reason" value={form.reason} onChange={handleChange}>
              <option value="" disabled>
                Select a reason
              </option>
              <option value="privacy">Privacy concerns</option>
              <option value="not_using">I don't use Telebook anymore</option>
              <option value="second_account">I have another account</option>
              <option value="too_distracting">Too distracting / taking too much time</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Additional Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Help us improve Telebook..."
              value={form.feedback}
              onChange={handleChange}
            />
          </div>

          <div className="form-group" style={{ marginTop: "20px" }}>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="ackMessages"
                name="ackMessages"
                checked={form.ackMessages}
                onChange={handleChange}
                required
              />
              <label htmlFor="ackMessages">
                I understand that my chat history, photos, and voice notes will be permanently
                purged.
              </label>
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="ackIrreversible"
                name="ackIrreversible"
                checked={form.ackIrreversible}
                onChange={handleChange}
                required
              />
              <label htmlFor="ackIrreversible">
                I understand that I cannot recover my Telebook account after it is deleted.
              </label>
            </div>
          </div>

          <div className="button-group">
            <button type="button" className="btn btn-cancel" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-delete" disabled={!canSubmit}>
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
