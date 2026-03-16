import React, { useState } from 'react';
import { Link, Copy } from 'lucide-react';

const LinkShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const shortenUrl = () => {
    setError('');
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }
    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }
    // Simple shortening: generate random 6-char code
    const shortCode = Math.random().toString(36).substring(2, 8);
    const domain = window.location.origin;
    setShortUrl(`${domain}/s/${shortCode}`);
    // Note: In production, store mapping on server
    localStorage.setItem(shortCode, url);
  };

  const copyToClipboard = async () => {
    if (shortUrl) {
      try {
        await navigator.clipboard.writeText(shortUrl);
        alert('Short URL copied to clipboard!');
      } catch (err) {
        alert('Failed to copy');
      }
    }
  };

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link size={48} style={{ color: 'var(--primary)' }} />
          <h1 className="gradient-text-gold" style={{ marginTop: '1rem' }}>Link Shortener</h1>
          <p>Shorten your long URLs quickly and easily</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="url-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Enter your URL:
          </label>
          <input
            id="url-input"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/very/long/url"
            style={{
              width: '100%',
              padding: '1rem',
              border: '2px solid var(--border)',
              borderRadius: '10px',
              fontSize: '1rem',
              background: 'var(--glass-bg)',
              color: 'var(--text)'
            }}
          />
        </div>

        {error && (
          <div style={{ color: 'red', marginBottom: '1rem', fontWeight: 'bold' }}>
            {error}
          </div>
        )}

        <button
          onClick={shortenUrl}
          className="btn btn-primary"
          style={{ width: '100%', marginBottom: '2rem' }}
        >
          Shorten URL
        </button>

        {shortUrl && (
          <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, marginRight: '1rem' }}>
                <strong>Short URL:</strong>
                <p style={{ wordBreak: 'break-all', margin: '0.5rem 0' }}>{shortUrl}</p>
              </div>
              <button
                onClick={copyToClipboard}
                className="btn btn-secondary"
                style={{ flexShrink: 0 }}
              >
                <Copy size={16} style={{ marginRight: '0.5rem' }} />
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkShortener;
