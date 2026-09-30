"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SignaturePillars() {
  const pillars = [
    {
      num: "01",
      badge: "THE ROASTERY",
      title: "Direct-Estate Micro Lots",
      copy: "We source small lots directly from third-generation coffee planters in Chikmagalur, Coorg, and the Araku Valley. Roasted in-house weekly to celebrate terroir rather than roast depth.",
      image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=900&auto=format&fit=crop",
      tags: ["Direct Trade", "Light-Medium Roast", "94+ Cupping"],
      link: "#brewbar",
    },
    {
      num: "02",
      badge: "THE KITCHEN",
      title: "Modern Indian Soul",
      copy: "Food designed with the same obsessive precision as our coffee. Wild 36-hour sourdough fermented in-house, whipped sheep's feta, smoky tandoor spices, and hand-rolled breakfast brioche.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=900&auto=format&fit=crop",
      tags: ["Wild Sourdough", "Regional Spices", "Seasonal Produce"],
      link: "#menu",
    },
    {
      num: "03",
      badge: "THE SANCTUARY",
      title: "A Room Built for Lingering",
      copy: "Raw terracotta, hand-carved Gujarat teak, and lush monstera foliage bathed in soft morning light. A calming space tailored for slow conversations, quiet reading, and productive solitude.",
      image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=900&auto=format&fit=crop",
      tags: ["Sunlit Courtyard", "Terrazzo Bar", "Mezzanine Nooks"],
      link: "#space",
    },
  ];

  return (
    <section className="pillars-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              <span className="eyebrow-dot" />
              <span>The Foundations</span>
            </div>
            <h2 className="section-title">What Anaar is built on.</h2>
          </div>
          <p className="section-desc">
            We asked ourselves what an Indian café could be if it respected regional agriculture,
            honored slow extraction, and welcomed guests like extended family.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="pillar-card">
              <div className="pillar-img-wrapper">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className="pillar-badge-num">{pillar.num} — {pillar.badge}</span>
              </div>

              <div className="pillar-body">
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-copy">{pillar.copy}</p>

                <div className="pillar-tags">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="pillar-tag">{tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--border-light)" }}>
                  <a
                    href={pillar.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--pomegranate)",
                    }}
                  >
                    <span>Discover More</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
