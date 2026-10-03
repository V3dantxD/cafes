"use client";

import { useState } from "react";
import { Send, Check, Phone, Mail } from "lucide-react";

function InstagramIcon({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#fff", marginBottom: "14px" }}>
              Met<span style={{ color: "var(--pomegranate-glow)", fontStyle: "italic" }}>v</span>anta
            </div>
            <p style={{ fontSize: "14px", color: "rgba(250, 247, 242, 0.7)", lineHeight: "1.65", maxWidth: "340px", marginBottom: "24px" }}>
              A specialty coffee roastery and modern Indian café in Ahmedabad. Small-batch lots,
              36-hour sourdough, and a room built for staying a little longer.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ivory)",
                }}
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://wa.me/917948924200"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ivory)",
                }}
              >
                <Phone size={17} />
              </a>
              <a
                href="mailto:hello@metvanta.cafe"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ivory)",
                }}
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div>
            <h4 className="footer-col-title">The Experience</h4>
            <ul className="footer-links-list">
              <li><a href="#menu">Tasting Menu</a></li>
              <li><a href="#brewbar">Pour-Over Bar</a></li>
              <li><a href="#space">Architectural Space</a></li>
              <li><a href="#story">Our Philosophy</a></li>
              <li><a href="#reviews">Guest Acclaim</a></li>
            </ul>
          </div>

          {/* Col 3: Visit & Hours */}
          <div>
            <h4 className="footer-col-title">Visit Us</h4>
            <p style={{ fontSize: "14px", color: "rgba(250, 247, 242, 0.7)", lineHeight: "1.6", marginBottom: "12px" }}>
              Opus One, Sindhu Bhavan Road,<br />
              Bodakdev, Ahmedabad 380054
            </p>
            <p style={{ fontSize: "13px", color: "var(--brass-light)" }}>
              Mon – Fri: 8:00 AM – 11:30 PM<br />
              Sat – Sun: 8:00 AM – Midnight
            </p>
          </div>

          {/* Col 4: Cupping Club Newsletter */}
          <div>
            <h4 className="footer-col-title">Secret Cupping Club</h4>
            <p style={{ fontSize: "13.5px", color: "rgba(250, 247, 242, 0.7)", lineHeight: "1.6" }}>
              Subscribe to receive invitations to private micro-lot cupping sessions and seasonal roast releases.
            </p>

            {subscribed ? (
              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px", color: "var(--brass-light)", fontSize: "13.5px" }}>
                <Check size={16} />
                <span>You&apos;re on the cupping list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-box">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" aria-label="Subscribe">
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 Metvanta Specialty Coffee House. All rights reserved. Bodakdev, Ahmedabad.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Estate Direct Trade</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
