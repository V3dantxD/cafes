"use client";

import { useState } from "react";
import Image from "next/image";
import { spacePhotos } from "@/data/cafeData";
import { SpacePhoto } from "@/types/cafe";
import { X, ZoomIn, Compass } from "lucide-react";

export default function SpaceGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<SpacePhoto | null>(null);

  const cardClasses = [
    "bento-card-1",
    "bento-card-2",
    "bento-card-3",
    "bento-card-4",
  ];

  return (
    <section className="space-section-v2" id="space">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              <Compass size={14} />
              <span>Architectural Sanctuary</span>
            </div>
            <h2 className="section-title">Come for the coffee. Stay for the room.</h2>
          </div>
          <p className="section-desc">
            Designed by local craftspeople with lime plaster, reclaimed teak, raw terracotta,
            and acoustic buffers for unhurried conversations and quiet creative focus.
          </p>
        </div>

        {/* Bento Grid Showcase */}
        <div className="space-bento">
          {spacePhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`bento-card ${cardClasses[index] || ""}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="bento-overlay">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span className="bento-sub">{photo.subtitle}</span>
                  <ZoomIn size={16} style={{ opacity: 0.8 }} />
                </div>
                <h3 className="bento-title">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ position: "relative", width: "100%", height: "460px" }}>
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(14, 10, 9, 0.75)",
                  color: "#fff",
                  padding: "8px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: "36px" }}>
              <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brass-light)" }}>
                {selectedPhoto.subtitle}
              </span>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#fff", margin: "8px 0 14px" }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ fontSize: "15px", color: "rgba(250, 247, 242, 0.8)", lineHeight: "1.7" }}>
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
