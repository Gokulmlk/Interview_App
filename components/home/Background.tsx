"use client";

import Lightfall from "@/components/Lightfall";

export default function Background() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={4}
          streakWidth={0.5}
          streakLength={1}
          glow={0.6}
          density={0.6}
          twinkle={0.5}
          zoom={1.6}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#020617]/40 via-[#020617]/30 to-[#020617]/80" />
    </>
  );
}