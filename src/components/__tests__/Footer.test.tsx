import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("ブランド名を表示する", () => {
    render(<Footer />);
    expect(screen.getByText("Hope for the World")).toBeInTheDocument();
  });

  it("著作権表示を含む", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });

  it("SNSリンクが3つある（LINE・Instagram・Facebook）", () => {
    render(<Footer />);
    expect(screen.getByLabelText("LINE")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
  });

  it("SNSリンクが外部リンクとして設定されている", () => {
    render(<Footer />);
    const lineLink = screen.getByLabelText("LINE").closest("a");
    expect(lineLink).toHaveAttribute("target", "_blank");
    expect(lineLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("聖書の言葉を表示する", () => {
    render(<Footer />);
    expect(screen.getByText(/水が海を覆うように/)).toBeInTheDocument();
    expect(screen.getByText("ハバクク 2:14")).toBeInTheDocument();
  });
});
