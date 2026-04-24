import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NotFound from "@/app/not-found";

describe("NotFound", () => {
  it("404 と「ページが見つかりません」が表示される", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("ページが見つかりません")).toBeInTheDocument();
  });

  it("トップページへ戻るリンクの href が / である", () => {
    render(<NotFound />);
    const link = screen.getByRole("link", { name: "トップページへ戻る" });
    expect(link).toHaveAttribute("href", "/");
  });
});
