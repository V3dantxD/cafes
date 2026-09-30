"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function AmbientSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      // Stop sound
      if (nodesRef.current) {
        try {
          nodesRef.current.gain.gain.setTargetAtTime(0, audioCtxRef.current!.currentTime, 0.5);
          setTimeout(() => {
            nodesRef.current?.osc1.stop();
            nodesRef.current?.osc2.stop();
            nodesRef.current = null;
          }, 600);
        } catch {
          // ignore
        }
      }
      setIsPlaying(false);
    } else {
      // Start ambient chord
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = audioCtxRef.current || new AudioCtx();
        audioCtxRef.current = ctx;

        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        // Warm jazz 9th chord frequencies: F# and C# with warm harmonics
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(146.83, ctx.currentTime); // D3

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(220.00, ctx.currentTime); // A3

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, ctx.currentTime); // warm mellow cut

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.2); // gentle soothing volume

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        nodesRef.current = { osc1, osc2, gain };
        setIsPlaying(true);
      } catch (e) {
        console.error("Audio Context could not start:", e);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (nodesRef.current) {
        try {
          nodesRef.current.osc1.stop();
          nodesRef.current.osc2.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <div
      className={`ambient-player ${isPlaying ? "ambient-playing" : ""}`}
      onClick={toggleSound}
      title={isPlaying ? "Mute Café Soundscape" : "Listen to Anaar Ambient Soundscape"}
    >
      <div className="soundwave-bars">
        <span className="wave-bar" />
        <span className="wave-bar" />
        <span className="wave-bar" />
        <span className="wave-bar" />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", color: "var(--brass-light)", textTransform: "uppercase" }}>
          {isPlaying ? "Anaar Soundscape Active" : "Café Ambience"}
        </span>
        <span style={{ fontSize: "12px", color: "rgba(250, 247, 242, 0.7)" }}>
          {isPlaying ? "Ahmedabad Rain & Lo-Fi" : "Click to Listen"}
        </span>
      </div>

      <div style={{ marginLeft: "4px", color: isPlaying ? "var(--brass-light)" : "rgba(255,255,255,0.4)" }}>
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </div>
    </div>
  );
}
