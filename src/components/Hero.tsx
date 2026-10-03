"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles, Compass, Calendar } from "lucide-react";

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  return (
    <section className="hero-v2">
      {/* Background Image with Atmospheric Lighting */}
      <div className="hero-backdrop">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2200&auto=format&fit=crop"
          alt="Metvanta Specialty Coffee House interior with warm lighting"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="hero-overlay" />
      </div>

      <div className="wrap hero-grid-content">
        {/* Left Column: Headlines & Editorial Copy */}
        <div className="hero-main">
          {/* Live Status Bar */}
          <div className="hero-status-bar">
            <div className="badge-pill">
              <span className="pulse-dot" />
              <span>Open Today · 8:00 AM – 11:30 PM</span>
            </div>
            <div className="badge-pill" style={{ borderColor: "rgba(200, 157, 86, 0.35)", color: "var(--brass-light)" }}>
              <span>Bodakdev, Ahmedabad</span>
            </div>
          </div>

          {/* Editorial Headline */}
          <h1 className="hero-title-v2">
            Where slow mornings meet <span className="hero-italic">bold</span> Indian craft.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle-v2">
            Direct-trade single estates from the Western Ghats, roasted weekly in small batches
            and paired with progressive Indian plates—housed in a sunlit architectural sanctuary.
          </p>

          {/* Primary CTAs */}
          <div className="hero-ctas-v2">
            <a href="#menu" className="btn btn-primary">
              <span>Explore Tasting Menu</span>
              <ArrowUpRight size={17} />
            </a>

            <button onClick={onOpenReservation} className="btn btn-gold">
              <Calendar size={16} />
              <span>Reserve a Table</span>
            </button>

            <a href="#space" className="btn btn-glass">
              <Compass size={16} />
              <span>The Space</span>
            </a>
          </div>

          {/* Key Metrics */}
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-val">94.5</span>
              <span className="metric-lbl">Specialty Cupping Score</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">100%</span>
              <span className="metric-lbl">Direct-Trade Micro Lots</span>
            </div>
            <div className="metric-item">
              <span className="metric-val">4.9 ★</span>
              <span className="metric-lbl">Google Acclaim (850+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Roast Showcase Card */}
        <div className="hero-feature-card">
          <div className="feature-top">
            <span className="roast-badge">Current Roast Profile</span>
            <span style={{ fontSize: "12px", color: "rgba(250,247,242,0.5)" }}>Lot #24</span>
          </div>

          <div className="feature-title">Attikan Honey Arabica</div>
          <div className="feature-estate">Biligirirangana Hills, Karnataka · 1,450m</div>

          <div className="feature-notes">
            <span className="note-tag">Jasmine Flower</span>
            <span className="note-tag">Yellow Peach</span>
            <span className="note-tag">Raw Forest Honey</span>
            <span className="note-tag">Bergamot Zest</span>
          </div>

          <p style={{ fontSize: "13px", color: "rgba(250,247,242,0.65)", lineHeight: "1.55", marginBottom: "20px" }}>
            Lightly roasted to preserve crisp acidity and wild blossom floral aromatics. Recommended as Hario V60 or Iced Cold Drip.
          </p>

          <div className="feature-footer">
            <div className="feature-cupping">
              <span className="cupping-score">94.5</span>
              <span className="cupping-label">Q-Grade Score</span>
            </div>
            <a href="#brewbar" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "var(--brass-light)", fontWeight: 500 }}>
              <span>View Brew Specs</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
