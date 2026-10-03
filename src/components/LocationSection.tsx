"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, Navigation, Copy, Check, Wifi, Car, Dog, Accessibility } from "lucide-react";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const addressText = "Metvanta Coffee House, Ground Floor, Opus One, Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="location-section-v2" id="visit">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              <MapPin size={14} />
              <span>Location & Hours</span>
            </div>
            <h2 className="section-title">Come find us in Bodakdev.</h2>
          </div>
          <p className="section-desc">
            Conveniently situated off Sindhu Bhavan Road with ample valet parking, leafy courtyard seating,
            and high-speed fiber connectivity.
          </p>
        </div>

        <div className="loc-card-container">
          {/* Left Details Pane */}
          <div className="loc-details-pane">
            <div>
              <div className="loc-info-group">
                <span className="loc-label">
                  <MapPin size={14} />
                  <span>Address</span>
                </span>
                <p>
                  Opus One, Sindhu Bhavan Marg,<br />
                  Bodakdev, Ahmedabad, Gujarat 380054
                </p>
                <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
                  <button
                    onClick={handleCopy}
                    className="btn btn-glass"
                    style={{ padding: "8px 16px", fontSize: "12.5px" }}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? "Address Copied!" : "Copy Address"}</span>
                  </button>
                  <a
                    href="https://maps.google.com/?q=Sindhu+Bhavan+Road+Bodakdev+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                    style={{ padding: "8px 16px", fontSize: "12.5px" }}
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              <div className="loc-info-group">
                <span className="loc-label">
                  <Clock size={14} />
                  <span>Opening Hours</span>
                </span>
                <p>
                  Monday – Friday: <strong>8:00 AM – 11:30 PM</strong><br />
                  Saturday – Sunday: <strong>8:00 AM – Midnight</strong>
                </p>
                <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="pulse-dot" />
                  <span style={{ fontSize: "12px", color: "var(--brass-light)" }}>Kitchen closes 45 mins before midnight</span>
                </div>
              </div>

              <div className="loc-info-group">
                <span className="loc-label">
                  <Phone size={14} />
                  <span>Direct Inquiries</span>
                </span>
                <p>
                  +91 79 4892 4200 · concierge@metvanta.cafe<br />
                  Instagram: @metvanta.cafe
                </p>
              </div>

              {/* Amenities */}
              <div className="loc-amenities-row">
                <span className="amenity-chip">
                  <Car size={13} />
                  <span>Valet Parking</span>
                </span>
                <span className="amenity-chip">
                  <Wifi size={13} />
                  <span>150 Mbps Fiber</span>
                </span>
                <span className="amenity-chip">
                  <Dog size={13} />
                  <span>Pet-Friendly Courtyard</span>
                </span>
                <span className="amenity-chip">
                  <Accessibility size={13} />
                  <span>Step-Free Access</span>
                </span>
              </div>
            </div>

            <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "12.5px", color: "rgba(250,247,242,0.5)" }}>
              No reservation required for bar seating or quick takeaway brews.
            </div>
          </div>

          {/* Right Map Pane with Interactive Styled Embed */}
          <div className="loc-map-pane">
            <iframe
              title="Metvanta Specialty Coffee Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6979262947844!2d72.5029!3d23.0354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sSindhu%20Bhavan%20Marg%2C%20Bodakdev%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
