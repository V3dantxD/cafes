"use client";

import { X, Trash2, Send, ShoppingBag } from "lucide-react";
import { MenuItem } from "@/types/cafe";

export type TrayItem = {
  item: MenuItem;
  quantity: number;
};

interface TastingTrayModalProps {
  isOpen: boolean;
  onClose: () => void;
  tray: TrayItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearTray: () => void;
}

export default function TastingTrayModal({
  isOpen,
  onClose,
  tray,
  onUpdateQuantity,
  onRemoveItem,
  onClearTray,
}: TastingTrayModalProps) {
  if (!isOpen) return null;

  const subtotal = tray.reduce((sum, current) => sum + current.item.price * current.quantity, 0);

  const handleSendToWhatsApp = () => {
    if (tray.length === 0) return;

    let itemsText = "";
    tray.forEach((ti, idx) => {
      itemsText += `${idx + 1}. ${ti.item.name} (${ti.quantity}x) — ₹${ti.item.price * ti.quantity}%0A`;
    });

    const message = `*Order / Tasting Request at Metvanta Café*%0A` +
      `--------------------------------%0A` +
      itemsText +
      `--------------------------------%0A` +
      `*Total Estimated:* ₹${subtotal}%0A%0A` +
      `_I would like to order / reserve these items for my visit!_`;

    window.open(`https://wa.me/917948924200?text=${message}`, "_blank");
  };

  return (
    <>
      <div className="tray-drawer-backdrop" onClick={onClose} />
      <div className="tray-drawer">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShoppingBag size={20} color="var(--brass-light)" />
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "22px", color: "#fff" }}>
              Your Tasting Tray
            </h3>
          </div>
          <button onClick={onClose} style={{ color: "rgba(255,255,255,0.6)", cursor: "pointer" }}>
            <X size={20} />
          </button>
        </div>

        {tray.length === 0 ? (
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <ShoppingBag size={48} style={{ opacity: 0.2, marginBottom: "16px" }} />
            <p style={{ color: "rgba(250, 247, 242, 0.7)", fontSize: "15px", marginBottom: "8px" }}>
              Your tasting tray is empty.
            </p>
            <p style={{ color: "rgba(250, 247, 242, 0.4)", fontSize: "13px" }}>
              Click &quot;+ Add to Tray&quot; on any coffee or dish on the menu to preview your table spread.
            </p>
          </div>
        ) : (
          <>
            <div className="tray-items-list">
              {tray.map(({ item, quantity }) => (
                <div key={item.id} className="tray-item-row">
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "14.5px", color: "#fff" }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: "12.5px", color: "var(--brass-light)", marginTop: "2px" }}>
                      ₹{item.price} each
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.08)", borderRadius: "999px", padding: "2px 8px" }}>
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        style={{ color: "#fff", width: "20px", height: "20px", fontSize: "14px" }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: "13px", fontWeight: 600, minWidth: "20px", textAlign: "center" }}>
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        style={{ color: "#fff", width: "20px", height: "20px", fontSize: "14px" }}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{ color: "rgba(255,255,255,0.4)", cursor: "pointer" }}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ color: "rgba(250,247,242,0.6)", fontSize: "14px" }}>Estimated Total:</span>
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", color: "var(--brass-light)" }}>
                  ₹{subtotal}
                </span>
              </div>

              <button
                onClick={handleSendToWhatsApp}
                className="btn btn-gold"
                style={{ width: "100%", padding: "14px" }}
              >
                <Send size={16} />
                <span>Pre-Order via WhatsApp</span>
              </button>

              <button
                onClick={onClearTray}
                style={{ width: "100%", textAlign: "center", marginTop: "12px", fontSize: "12.5px", color: "rgba(255,255,255,0.4)" }}
              >
                Clear all items
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
