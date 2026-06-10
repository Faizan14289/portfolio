import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const;

export function createOgImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background: "linear-gradient(135deg, #060b14 0%, #0f1c26 45%, #132a32 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -60,
            width: 420,
            height: 420,
            background: "radial-gradient(circle, rgba(45,212,191,0.45) 0%, transparent 68%)",
            filter: "blur(2px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 40,
            width: 380,
            height: 380,
            background: "radial-gradient(circle, rgba(251,146,60,0.35) 0%, transparent 65%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, zIndex: 1 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: -1.5,
              color: "#e8f8f5",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#D4B86A",
              maxWidth: 900,
              lineHeight: 1.25,
            }}
          >
            {site.jobTitle}
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 24,
              color: "#8fb8b0",
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            {site.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 20, color: "#6f8a82" }}>Portfolio · Case studies · Resume</div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#fb923c",
            }}
          >
            Open to senior roles
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
