"use client";

import Image from "next/image";
import { guestReviews } from "@/data/cafeData";
import { Star, Award, CheckCircle } from "lucide-react";

export default function ReviewsSection() {
  const pressQuotes = [
    { source: "Vogue India", text: "One of the most serene and design-conscious spaces to sip specialty coffee in Ahmedabad." },
    { source: "Architectural Digest", text: "Terrazzo, brass, and terracotta come together with sublime restraint." },
    { source: "LBB Ahmedabad", text: "The Cardamom Flat White and Basque Cheesecake are worth a detour from anywhere in Gujarat." },
  ];

  return (
    <section className="reviews-section-v2" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              <Award size={14} />
              <span>Acclaim & Guest Words</span>
            </div>
            <h2 className="section-title">Loved by regulars and travelers.</h2>
          </div>

          {/* Rating Summary Badge */}
          <div
            style={{
              background: "#ffffff",
              padding: "16px 24px",
              borderRadius: "14px",
              border: "1px solid var(--border-light)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: "36px", color: "var(--pomegranate)", lineHeight: 1 }}>
              4.9
            </div>
            <div>
              <div style={{ display: "flex", gap: "2px", color: "#df9e28", marginBottom: "4px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                Google Verified · 850+ 5-Star Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Press Mentions Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {pressQuotes.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(40,30,24,0.08)",
                borderRadius: "12px",
                padding: "20px 24px",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pomegranate)", marginBottom: "6px" }}>
                {p.source}
              </div>
              <p style={{ fontSize: "13.5px", color: "var(--text-body)", fontStyle: "italic", lineHeight: "1.55" }}>
                “{p.text}”
              </p>
            </div>
          ))}
        </div>

        {/* Guest Reviews Grid */}
        <div className="reviews-grid-v2">
          {guestReviews.map((rev) => (
            <div key={rev.id} className="review-card-v2">
              <div>
                <div className="stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="review-quote-v2">“{rev.quote}”</p>
              </div>

              <div className="review-author-row">
                <div className="author-avatar">
                  <Image
                    src={rev.avatar}
                    alt={rev.author}
                    width={44}
                    height={44}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span className="author-name">{rev.author}</span>
                    <CheckCircle size={12} style={{ color: "#2e6b36" }} />
                  </div>
                  <div className="author-role">{rev.role}</div>
                  <div className="author-order">✦ {rev.drinkOrdered}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
