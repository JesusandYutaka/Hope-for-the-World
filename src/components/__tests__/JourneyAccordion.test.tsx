import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import JourneyAccordion from "@/components/JourneyAccordion";

describe("JourneyAccordion", () => {
  it("全5項目のタイトルが表示される", () => {
    render(<JourneyAccordion />);
    expect(screen.getByText("イエス様との出会い")).toBeInTheDocument();
    expect(screen.getByText("神様はあなたを個人的に愛しています")).toBeInTheDocument();
    expect(screen.getByText("新しいアイデンティティー")).toBeInTheDocument();
    expect(screen.getByText("転機")).toBeInTheDocument();
    expect(screen.getByText("今")).toBeInTheDocument();
  });

  it("初期状態では全てのボタンが collapsed（aria-expanded=false）", () => {
    render(<JourneyAccordion />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("ボタンをクリックするとそのアイテムが開く（aria-expanded=true）", () => {
    render(<JourneyAccordion />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
  });

  it("開いているアイテムを再クリックすると閉じる", () => {
    render(<JourneyAccordion />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("別のアイテムをクリックすると前のアイテムが閉じる", () => {
    render(<JourneyAccordion />);
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });
});
