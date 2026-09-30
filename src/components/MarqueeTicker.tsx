"use client";

export default function MarqueeTicker() {
  const highlights = [
    "DIRECT TRADE ESTATE LOTS • CHIKMAGALUR & ARAKU VALLEY",
    "POURING: 18-HOUR KYOTO SLOW COLD DRIP",
    "36-HOUR WOOD-FIRED SOURDOUGH TOASTIES",
    "SPECIALTY CUPPING SCORE: 94+",
    "SUNLIT BOTANICAL COURTYARD • PET FRIENDLY",
    "CARDAMOM & KASHMIRI SAFFRON FLAT WHITE",
    "ROASTED IN-HOUSE IN SMALL BATCHES WEEKLY",
    "BODAKDEV, AHMEDABAD • OPEN TILL 11:30 PM",
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...highlights, ...highlights].map((item, index) => (
          <span key={index} className="marquee-item">
            <span>{item}</span>
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
