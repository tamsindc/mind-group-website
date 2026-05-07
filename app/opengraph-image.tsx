import { ImageResponse } from "next/og";

export const alt = "Mind Group — Strategy, Governance & Innovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          position: "relative",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Massive italic ampersand watermark, top right */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -120,
            fontSize: 720,
            color: "rgba(201,169,97,0.18)",
            fontStyle: "italic",
            lineHeight: 0.78,
            display: "flex",
          }}
        >
          &amp;
        </div>

        {/* Top: small location stamp */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C9A961",
            fontFamily: "system-ui",
          }}
        >
          <div style={{ width: 32, height: 1, background: "#C9A961" }} />
          New York &middot; Global Strategic Advisory
        </div>

        {/* Bottom block: brand mark + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: 110,
              lineHeight: 1.0,
              letterSpacing: -1,
              marginBottom: 28,
            }}
          >
            Mind Group
          </div>
          <div
            style={{
              fontSize: 38,
              fontStyle: "italic",
              color: "#A1A1AA",
              lineHeight: 1.2,
              maxWidth: 800,
            }}
          >
            Strategy, Governance &amp; Innovation.
          </div>
        </div>

        {/* Bottom thin gold rule */}
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            bottom: 60,
            height: 1,
            background:
              "linear-gradient(to right, #C9A961, rgba(201,169,97,0))",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
