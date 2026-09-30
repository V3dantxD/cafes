"use client";

import { useState } from "react";
import { X, Calendar, Clock, Users, MapPin, Check, Send } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [date, setDate] = useState("Today");
  const [timeSlot, setTimeSlot] = useState("10:30 AM — Morning Brew & Brunch");
  const [guests, setGuests] = useState("2 Guests");
  const [seating, setSeating] = useState("Sunlit Courtyard Garden");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build pre-filled WhatsApp message
    const message = `*Table Reservation Request at Anaar Café*%0A` +
      `--------------------------------%0A` +
      `*Name:* ${name || "Guest"}%0A` +
      `*Date:* ${date}%0A` +
      `*Time Slot:* ${timeSlot}%0A` +
      `*Party Size:* ${guests}%0A` +
      `*Seating Preference:* ${seating}%0A` +
      (notes ? `*Special Notes:* ${notes}%0A` : "") +
      `*Phone:* ${phone || "Not specified"}%0A` +
      `--------------------------------%0A` +
      `_Sent from Anaar Digital Concierge_`;

    // Open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/917948924200?text=${message}`, "_blank");
    }, 600);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px 0" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(46, 196, 107, 0.2)",
                color: "#2ec46b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Check size={32} />
            </div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#fff", marginBottom: "12px" }}>
              Reservation Request Prepared!
            </h3>
            <p style={{ color: "rgba(250, 247, 242, 0.8)", fontSize: "15px", lineHeight: "1.6", maxWidth: "420px", margin: "0 auto 28px" }}>
              Your reservation details have been transferred to our WhatsApp host desk. A concierge member will confirm your table in minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn btn-gold"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="eyebrow eyebrow-brass" style={{ marginBottom: "8px" }}>
              <Calendar size={14} />
              <span>Table Concierge</span>
            </div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "30px", color: "#fff", marginBottom: "8px" }}>
              Reserve your table at Anaar.
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(250, 247, 242, 0.7)" }}>
              We hold limited tables for reservations while keeping the brew bar open for walk-ins.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="modal-form-grid">
                {/* Date */}
                <div>
                  <label className="form-lbl">Date</label>
                  <select
                    className="form-select"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Friday">This Friday</option>
                    <option value="This Saturday">This Saturday</option>
                    <option value="This Sunday">This Sunday</option>
                  </select>
                </div>

                {/* Party Size */}
                <div>
                  <label className="form-lbl">Party Size</label>
                  <select
                    className="form-select"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="1 Guest (Solo Work / Coffee)">1 Guest (Solo Coffee / Work)</option>
                    <option value="2 Guests (Intimate Table)">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests (Standard Booth)">4 Guests</option>
                    <option value="5-8 Guests (Courtyard Group)">5-8 Guests</option>
                  </select>
                </div>

                {/* Time Slot */}
                <div>
                  <label className="form-lbl">Time Window</label>
                  <select
                    className="form-select"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                  >
                    <option value="9:00 AM — Morning Pour-Over & Peace">9:00 AM — Morning Pour-Over</option>
                    <option value="11:30 AM — Brunch & Coffee">11:30 AM — Brunch & Coffee</option>
                    <option value="2:30 PM — Afternoon Work & Cold Drip">2:30 PM — Afternoon Work</option>
                    <option value="5:30 PM — Sunset High Chai & Pastry">5:30 PM — Sunset High Chai</option>
                    <option value="8:00 PM — Candlelit Dinner & Dessert">8:00 PM — Candlelit Dinner</option>
                  </select>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="form-lbl">Seating Area</label>
                  <select
                    className="form-select"
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                  >
                    <option value="Sunlit Courtyard Garden">Sunlit Courtyard Garden (Pet Friendly)</option>
                    <option value="Terrazzo & Brass Brew Bar">Terrazzo Brew Bar (Barista View)</option>
                    <option value="Quiet Mezzanine Nook">Quiet Mezzanine Nook (Laptop Friendly)</option>
                    <option value="Cozy Leather Booth">Cozy Leather Booth</option>
                  </select>
                </div>

                {/* Guest Name */}
                <div>
                  <label className="form-lbl">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Shah"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="form-lbl">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="form-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Special Requests */}
                <div className="form-group-full">
                  <label className="form-lbl">Special Occasion or Dietary Note (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Birthday celebration, anniversary, high chair needed..."
                    className="form-input"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px" }}>
                <span style={{ fontSize: "12px", color: "rgba(250, 247, 242, 0.5)" }}>
                  Confirmation via WhatsApp in 5-10 mins
                </span>
                <button type="submit" className="btn btn-gold">
                  <Send size={15} />
                  <span>Send Reservation Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
