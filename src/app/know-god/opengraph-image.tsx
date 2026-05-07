import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f172a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ width: "48px", height: "3px", background: "#C9A84C", marginBottom: "40px" }} />
        <div
          style={{
            fontSize: "80px",
            fontWeight: "700",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          希望は、ある。
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            letterSpacing: "0.05em",
            textAlign: "center",
          }}
        >
          人生の意味を探しているあなたへ
        </div>
        <div style={{ position: "absolute", bottom: "48px", fontSize: "18px", color: "#475569", letterSpacing: "0.05em" }}>
          hopefortheworld.jp
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
