"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import SignaturePillars from "@/components/SignaturePillars";
import BrewBarMasterclass from "@/components/BrewBarMasterclass";
import Menu from "@/components/Menu";
import SpaceGallery from "@/components/SpaceGallery";
import StorySection from "@/components/StorySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import TastingTrayModal, { TrayItem } from "@/components/TastingTrayModal";
import AmbientSoundscape from "@/components/AmbientSoundscape";
import { MenuItem } from "@/types/cafe";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [trayOpen, setTrayOpen] = useState(false);
  const [tray, setTray] = useState<TrayItem[]>([]);

  // Add item to tasting tray
  const handleAddToTray = (item: MenuItem) => {
    setTray((prev) => {
      const existing = prev.find((t) => t.item.id === item.id);
      if (existing) {
        return prev.map((t) =>
          t.item.id === item.id ? { ...t, quantity: t.quantity + 1 } : t
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  // Update quantity in tray
  const handleUpdateQuantity = (id: string, delta: number) => {
    setTray((prev) =>
      prev
        .map((t) => {
          if (t.item.id === id) {
            const newQty = t.quantity + delta;
            return newQty > 0 ? { ...t, quantity: newQty } : null;
          }
          return t;
        })
        .filter((t): t is TrayItem => t !== null)
    );
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    setTray((prev) => prev.filter((t) => t.item.id !== id));
  };

  // Clear all items
  const handleClearTray = () => {
    setTray([]);
  };

  const totalTrayCount = tray.reduce((sum, current) => sum + current.quantity, 0);

  return (
    <main>
      {/* Dynamic Header */}
      <Header
        onOpenReservation={() => setReservationOpen(true)}
        onOpenTray={() => setTrayOpen(true)}
        trayCount={totalTrayCount}
      />

      {/* Atmospheric Editorial Hero */}
      <Hero onOpenReservation={() => setReservationOpen(true)} />

      {/* Infinite Micro-Lot Marquee Ticker */}
      <MarqueeTicker />

      {/* Three Pillars of Metvanta */}
      <SignaturePillars />

      {/* Interactive Brew Bar & Pour-Over Masterclass */}
      <BrewBarMasterclass />

      {/* Modern Filterable & Searchable Tasting Menu */}
      <Menu onAddToTray={handleAddToTray} />

      {/* Space & Architectural Bento Showcase with Lightbox */}
      <SpaceGallery />

      {/* Pomegranate Philosophy & Heritage Story */}
      <StorySection />

      {/* Acclaim & Verified Guest Reviews */}
      <ReviewsSection />

      {/* Interactive Ahmedabad Location Card & Map */}
      <LocationSection />

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Interactive Tasting Tray Drawer */}
      <TastingTrayModal
        isOpen={trayOpen}
        onClose={() => setTrayOpen(false)}
        tray={tray}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearTray={handleClearTray}
      />

      {/* Ambient Lo-Fi Café Soundscape Widget */}
      <AmbientSoundscape />
    </main>
  );
}
