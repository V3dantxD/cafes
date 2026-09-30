"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { menuItems } from "@/data/cafeData";
import { MenuItem } from "@/types/cafe";
import { Search, Plus, Sparkles, Check, Coffee, Utensils, Cake, Flame } from "lucide-react";

interface MenuProps {
  onAddToTray: (item: MenuItem) => void;
}

export default function Menu({ onAddToTray }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = [
    { key: "all", label: "Full Menu", icon: Sparkles },
    { key: "brews", label: "Specialty Brews", icon: Coffee },
    { key: "espresso", label: "Espresso & Lattes", icon: Flame },
    { key: "breakfast", label: "Artisan Breakfast", icon: Utensils },
    { key: "plates", label: "Modern Plates", icon: Utensils },
    { key: "dessert", label: "House Bakery", icon: Cake },
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      // Veg only filter
      if (vegOnly && !item.veg) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesSubname = item.subname?.toLowerCase().includes(query);
        const matchesDesc = item.desc.toLowerCase().includes(query);
        const matchesNotes = item.tastingNotes?.some((n) => n.toLowerCase().includes(query));
        if (!matchesName && !matchesSubname && !matchesDesc && !matchesNotes) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, vegOnly, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    onAddToTray(item);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  return (
    <section className="menu-section-v2" id="menu">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              <span className="eyebrow-dot" />
              <span>Seasonal Tasting Menu</span>
            </div>
            <h2 className="section-title">Considered plates, slow extraction.</h2>
          </div>
          <p className="section-desc">
            All our sourdoughs are fermented 36 hours. Coffee is extracted to order from single-estate lots.
            Prepared fresh in our Bodakdev kitchen.
          </p>
        </div>

        {/* Menu Controls: Categories, Search & Dietary Filter */}
        <div className="menu-control-bar">
          <div className="menu-categories-pill">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`menu-cat-btn ${activeCategory === cat.key ? "active" : ""}`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="menu-filter-actions">
            {/* Live Search Input */}
            <div className="search-input-wrap">
              <Search size={15} className="search-icon" />
              <input
                type="text"
                placeholder="Search coffee or plates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Vegetarian Toggle */}
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`veg-toggle-btn ${vegOnly ? "active" : ""}`}
              title="Show only vegetarian dishes"
            >
              <span>🌱 Veg Only</span>
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "var(--text-muted)" }}>
            <p style={{ fontSize: "18px", marginBottom: "8px" }}>No items found matching your filter.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setVegOnly(false);
              }}
              style={{ color: "var(--pomegranate)", textDecoration: "underline", fontSize: "14px" }}
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="menu-grid-v2">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-item-card">
                <div className="item-left">
                  <div className="item-head">
                    <h3 className="item-title">{item.name}</h3>
                    <span className="item-price">₹{item.price}</span>
                  </div>

                  {item.subname && <div className="item-subname">{item.subname}</div>}

                  <p className="item-desc">{item.desc}</p>

                  {/* Tasting Notes */}
                  {item.tastingNotes && (
                    <div className="item-notes-list">
                      {item.tastingNotes.map((note) => (
                        <span key={note} className="item-note-chip">
                          {note}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="item-actions">
                    <span className="veg-indicator">
                      {item.veg ? (
                        <span className="veg-box">
                          <span className="veg-dot-inner" />
                        </span>
                      ) : (
                        <span className="non-veg-box">
                          <span className="non-veg-dot-inner" />
                        </span>
                      )}
                      <span style={{ color: item.veg ? "#2e6b36" : "#942b2b" }}>
                        {item.veg ? (item.vegan ? "Vegan" : "Vegetarian") : "Non-Veg"}
                      </span>
                    </span>

                    <button
                      onClick={() => handleAdd(item)}
                      className="add-tray-btn"
                    >
                      {justAddedId === item.id ? (
                        <>
                          <Check size={14} />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus size={14} />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Photo Thumbnail */}
                <div className="item-photo">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
