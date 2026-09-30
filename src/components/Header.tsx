"use client";

import { useEffect, useState } from "react";
import { UtensilsCrossed, Calendar, Menu as MenuIcon, X, ShoppingBag } from "lucide-react";

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenTray: () => void;
  trayCount: number;
}

export default function Header({ onOpenReservation, onOpenTray, trayCount }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav-container">
          {/* Brand Logo */}
          <a href="#" className="brand-link">
            <span className="brand-logo">
              an<span className="accent-letter">a</span>ar
            </span>
            <span className="brand-badge">Ahmedabad</span>
          </a>

          {/* Desktop Nav Links */}
          <nav>
            <ul className="nav-menu">
              <li><a href="#menu">Tasting Menu</a></li>
              <li><a href="#brewbar">The Craft</a></li>
              <li><a href="#space">The Space</a></li>
              <li><a href="#story">Philosophy</a></li>
              <li><a href="#reviews">Acclaim</a></li>
              <li><a href="#visit">Visit</a></li>
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            {/* Tasting Tray Button */}
            <button
              onClick={onOpenTray}
              className="tray-btn"
              title="View Tasting Tray"
              aria-label="View Tasting Tray"
            >
              <ShoppingBag size={16} />
              <span>Tray</span>
              {trayCount > 0 && <span className="tray-count">{trayCount}</span>}
            </button>

            {/* Table Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="btn btn-gold"
              style={{ padding: "10px 22px", fontSize: "13.5px" }}
            >
              <Calendar size={15} />
              <span>Reserve Table</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <ul className="mobile-drawer-links">
          <li>
            <a href="#menu" onClick={() => setMobileOpen(false)}>
              <span>Tasting Menu</span>
              <span style={{ fontSize: "18px", opacity: 0.5 }}>01</span>
            </a>
          </li>
          <li>
            <a href="#brewbar" onClick={() => setMobileOpen(false)}>
              <span>The Craft</span>
              <span style={{ fontSize: "18px", opacity: 0.5 }}>02</span>
            </a>
          </li>
          <li>
            <a href="#space" onClick={() => setMobileOpen(false)}>
              <span>The Space</span>
              <span style={{ fontSize: "18px", opacity: 0.5 }}>03</span>
            </a>
          </li>
          <li>
            <a href="#story" onClick={() => setMobileOpen(false)}>
              <span>Philosophy</span>
              <span style={{ fontSize: "18px", opacity: 0.5 }}>04</span>
            </a>
          </li>
          <li>
            <a href="#visit" onClick={() => setMobileOpen(false)}>
              <span>Location & Hours</span>
              <span style={{ fontSize: "18px", opacity: 0.5 }}>05</span>
            </a>
          </li>
        </ul>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenReservation();
            }}
            className="btn btn-gold"
            style={{ width: "100%", padding: "14px" }}
          >
            <Calendar size={18} />
            <span>Book a Table</span>
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenTray();
            }}
            className="btn btn-glass"
            style={{ width: "100%", padding: "14px" }}
          >
            <ShoppingBag size={18} />
            <span>Tasting Tray ({trayCount})</span>
          </button>
        </div>
      </div>
    </>
  );
}
