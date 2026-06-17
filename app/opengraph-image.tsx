import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "8mirrors — The Custom Routine Box";

// Social share card shown when the URL is shared on SNS.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 76,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 800, color: "#111111", letterSpacing: -1 }}>8mirrors</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 50, fontWeight: 700, color: "#9a9a93", letterSpacing: 4 }}>CUSTOM K-BEAUTY ROUTINE</div>
          <div style={{ fontSize: 80, fontWeight: 600, color: "#111111", lineHeight: 1.05, maxWidth: 980 }}>
            The Custom Routine Box
          </div>
          <div style={{ fontSize: 32, color: "#555555", lineHeight: 1.4, maxWidth: 880 }}>
            A complete 5-step routine, built for your exact skin by Seoul experts. Any skin type, shipped worldwide.
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ background: "#62d8f4", color: "#111111", fontSize: 30, fontWeight: 700, padding: "14px 26px", borderRadius: 12 }}>
            $119 · Free worldwide shipping
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
