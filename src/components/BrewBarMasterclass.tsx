"use client";

import { useState } from "react";
import Image from "next/image";
import { brewMethods } from "@/data/cafeData";
import { Droplet, Flame, Clock, Sparkles, Scale, Coffee } from "lucide-react";

export default function BrewBarMasterclass() {
  const [activeMethodId, setActiveMethodId] = useState(brewMethods[0].id);
  const activeMethod = brewMethods.find((m) => m.id === activeMethodId) || brewMethods[0];

  const craftSteps = [
    { step: "01", title: "Terroir Selection", desc: "Single-origin beans hand-picked from shade-grown Indian mountain estates." },
    { step: "02", title: "Micro-Batch Roast", desc: "Weekly small roasts profile-tuned to maximize sweetness and floral acidity." },
    { step: "03", title: "Precision Grind", desc: "Micron-calibrated Mahlkönig EK43 grinding freshly dosed for every order." },
    { step: "04", title: "Calibrated Pour", desc: "Mineral-balanced 93°C water poured in concentric circles to extract origin notes." },
    { step: "05", title: "Ceramic Service", desc: "Poured into custom handmade studio ceramics that enhance aromatics." },
  ];

  return (
    <section className="brewbar-section" id="brewbar">
      <div className="wrap">
        <div className="section-head" style={{ color: "var(--ivory)", marginBottom: "40px" }}>
          <div>
            <div className="eyebrow eyebrow-brass" style={{ marginBottom: "14px" }}>
              <Coffee size={14} />
              <span>Slow Brew Bar & Roastery</span>
            </div>
            <h2 className="section-title" style={{ color: "#ffffff" }}>
              Every cup is an extraction of patience.
            </h2>
          </div>
          <p className="section-desc" style={{ color: "rgba(250, 247, 242, 0.75)" }}>
            Explore our manual brewing methods. Each device extracts different organic compounds,
            yielding vastly distinct textures, clarities, and flavor notes.
          </p>
        </div>

        {/* Method Selector Tabs */}
        <div className="brew-tabs">
          {brewMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethodId(method.id)}
              className={`brew-tab-btn ${activeMethodId === method.id ? "active" : ""}`}
            >
              <span>{method.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Method Feature Card */}
        <div className="brew-detail-card">
          <div className="brew-image-pane">
            <Image
              src={activeMethod.image}
              alt={activeMethod.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="brew-content-pane">
            <span className="brew-tagline">{activeMethod.tagline}</span>
            <h3 className="brew-name">{activeMethod.name}</h3>
            <p className="brew-desc">{activeMethod.description}</p>

            {/* Brewing Specifications Grid */}
            <div className="brew-specs-grid">
              <div className="spec-item">
                <span className="spec-val" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Scale size={14} style={{ opacity: 0.7 }} />
                  {activeMethod.ratio}
                </span>
                <span className="spec-label">Brew Ratio</span>
              </div>

              <div className="spec-item">
                <span className="spec-val" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Flame size={14} style={{ opacity: 0.7 }} />
                  {activeMethod.temp}
                </span>
                <span className="spec-label">Water Temp</span>
              </div>

              <div className="spec-item">
                <span className="spec-val" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Droplet size={14} style={{ opacity: 0.7 }} />
                  {activeMethod.grind}
                </span>
                <span className="spec-label">Grind Size</span>
              </div>

              <div className="spec-item">
                <span className="spec-val" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Clock size={14} style={{ opacity: 0.7 }} />
                  {activeMethod.time}
                </span>
                <span className="spec-label">Extraction Time</span>
              </div>
            </div>

            {/* Tasting Notes */}
            <div>
              <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(250,247,242,0.5)", marginBottom: "8px" }}>
                Cup Flavor Notes & Mouthfeel ({activeMethod.body})
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {activeMethod.notes.map((note) => (
                  <span
                    key={note}
                    style={{
                      fontSize: "12px",
                      color: "var(--brass-light)",
                      background: "rgba(200, 157, 86, 0.12)",
                      border: "1px solid rgba(200, 157, 86, 0.25)",
                      padding: "4px 12px",
                      borderRadius: "999px",
                    }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Craft Journey */}
        <div style={{ marginTop: "70px", paddingTop: "50px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--brass-light)", marginBottom: "24px" }}>
            The Anaar Journey: Estate to Ceramic Cup
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {craftSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--brass-light)", marginBottom: "10px" }}>
                  {step.step}
                </div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: "18px", color: "#fff", marginBottom: "8px" }}>
                  {step.title}
                </div>
                <p style={{ fontSize: "13px", color: "rgba(250,247,242,0.6)", lineHeight: "1.55" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
