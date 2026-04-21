import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

describe("YouTubeEmbed", () => {
  it("iframe の title 属性を設定する", () => {
    render(<YouTubeEmbed embedSrc="abc123" title="最新の礼拝" />);
    expect(screen.getByTitle("最新の礼拝")).toBeInTheDocument();
  });

  it("iframe の src に embedSrc を含む", () => {
    render(<YouTubeEmbed embedSrc="abc123" title="テスト" />);
    const iframe = screen.getByTitle("テスト") as HTMLIFrameElement;
    expect(iframe.src).toContain("abc123");
  });

  it("videoseries?list= 形式の embedSrc を受け付ける", () => {
    render(<YouTubeEmbed embedSrc="videoseries?list=PLXYZ" title="プレイリスト" />);
    const iframe = screen.getByTitle("プレイリスト") as HTMLIFrameElement;
    expect(iframe.src).toContain("videoseries");
  });
});
