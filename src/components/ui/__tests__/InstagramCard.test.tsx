import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InstagramCard from "@/components/ui/InstagramCard";

describe("InstagramCard", () => {
  it("ハンドルを表示する", () => {
    render(<InstagramCard href="https://instagram.com/test" handle="test_user" />);
    expect(screen.getByText("@test_user")).toBeInTheDocument();
  });

  it("href を正しく設定する", () => {
    render(<InstagramCard href="https://instagram.com/test" handle="test_user" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://instagram.com/test");
  });

  it("外部リンク属性を設定する", () => {
    render(<InstagramCard href="https://instagram.com/test" handle="test_user" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("description を表示する", () => {
    render(<InstagramCard href="https://instagram.com/test" handle="test_user" description="毎日更新中" />);
    expect(screen.getByText("毎日更新中")).toBeInTheDocument();
  });
});
