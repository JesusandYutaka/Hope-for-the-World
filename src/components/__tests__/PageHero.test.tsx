import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PageHero from "@/components/PageHero";

describe("PageHero", () => {
  it("eyebrow・title を表示する", () => {
    render(<PageHero eyebrow="Testimonies" title="証の部屋" />);
    expect(screen.getByText("Testimonies")).toBeInTheDocument();
    expect(screen.getByText("証の部屋")).toBeInTheDocument();
  });

  it("subtitle を表示する", () => {
    render(<PageHero eyebrow="Test" title="タイトル" subtitle="サブタイトル" />);
    expect(screen.getByText("サブタイトル")).toBeInTheDocument();
  });

  it("subtitle が未指定の場合は表示しない", () => {
    render(<PageHero eyebrow="Test" title="タイトル" />);
    expect(screen.queryByText("サブタイトル")).not.toBeInTheDocument();
  });

  it("verse と verseRef を表示する", () => {
    render(
      <PageHero
        eyebrow="Test"
        title="タイトル"
        verse="主を賛美せよ"
        verseRef="詩篇 150:1"
      />
    );
    expect(screen.getByText("主を賛美せよ")).toBeInTheDocument();
    expect(screen.getByText("詩篇 150:1")).toBeInTheDocument();
  });

  it("verse が未指定の場合は verseRef も表示しない", () => {
    render(<PageHero eyebrow="Test" title="タイトル" verseRef="詩篇 150:1" />);
    expect(screen.queryByText("詩篇 150:1")).not.toBeInTheDocument();
  });
});
