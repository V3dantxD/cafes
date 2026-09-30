"use client";

import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";

export default function StorySection() {
  return (
    <section className="story-section-v2" id="story">
      <div className="wrap">
        <div className="story-grid-v2">
          {/* Left Column: Visual Portrait & Floating Quote */}
          <div className="story-imagery">
            <div className="story-img-main">
              <Image
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop"
                alt="Head Barista & Roaster inspecting green bean lots at Anaar"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="story-floating-quote">
              <div className="quote-symbol">“</div>
              <p className="quote-text">
                An anaar holds hundreds of jewel seeds inside one quiet shell. That is how we see our café.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Soul */}
          <div>
            <div className="eyebrow eyebrow-brass" style={{ marginBottom: "14px" }}>
              <Sparkles size={14} />
              <span>Philosophy & Origins</span>
            </div>

            <h2 className="section-title" style={{ color: "#ffffff", marginBottom: "24px" }}>
              It began with a question about hospitality.
            </h2>

            <p className="story-copy-v2">
              For generations, coffee culture in India was divided between traditional south Indian filter
              decoctions and rapid European chains. We envisioned a third path: what if an Indian café
              treated high-elevation single-origin Indian coffees with world-class roasting mastery, while honoring
              the generosity of an Indian home kitchen?
            </p>

            <p className="story-copy-v2">
              The name comes from the pomegranate—<em>anaar</em>. In botanical traditions across Gujarat and Persia,
              the fruit symbolises abundance, meticulous detail, and community. Every cup, every sourdough starter,
              and every brass vessel has been chosen with conscious intention.
            </p>

            {/* Pomegranate Insight Callout */}
            <div className="pomegranate-insight-box">
              <h4 className="insight-title">Direct-Trade Indian Terroir</h4>
              <p className="insight-desc">
                We work directly with certified organic estates in the Western Ghats—Biligirirangana Hills,
                Chikmagalur, and the tribal cooperatives of Araku Valley. We pay up to 45% above Fairtrade minimums
                to reward soil regeneration and biodynamic farming.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "28px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden", border: "2px solid var(--border-gold)" }}>
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                  alt="Founder of Anaar"
                  width={48}
                  height={48}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "#fff", fontSize: "15px" }}>Aarav Mehta</div>
                <div style={{ fontSize: "12.5px", color: "var(--brass-light)" }}>Founder & Head Roaster, Anaar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
