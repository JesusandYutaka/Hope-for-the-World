import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LinkCard from "@/components/ui/LinkCard";

describe("LinkCard", () => {
  it("label と title を表示する", () => {
    render(<LinkCard href="https://example.com" label="YouTube" title="礼拝チャンネル" />);
    expect(screen.getByText("YouTube")).toBeInTheDocument();
    expect(screen.getByText("礼拝チャンネル")).toBeInTheDocument();
  });

  it("href を正しく設定する", () => {
    render(<LinkCard href="https://example.com" label="YouTube" title="礼拝チャンネル" />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com");
  });

  it("external=true の時は外部リンク属性を設定する", () => {
    render(<LinkCard href="https://example.com" label="YouTube" title="礼拝チャンネル" external />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("external=false の時は外部リンク属性を設定しない", () => {
    render(<LinkCard href="/contact" label="お問合せ" title="つながる" external={false} />);
    const link = screen.getByRole("link");
    expect(link).not.toHaveAttribute("target");
  });

  it("description を表示する", () => {
    render(<LinkCard href="https://example.com" label="YouTube" title="礼拝チャンネル" description="毎週更新" />);
    expect(screen.getByText("毎週更新")).toBeInTheDocument();
  });
});
