import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NumberedCard from "@/components/ui/NumberedCard";

describe("NumberedCard", () => {
  it("number・title・text を表示する", () => {
    render(<NumberedCard number="01" title="神の愛" text="神はあなたを愛しています" />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("神の愛")).toBeInTheDocument();
    expect(screen.getByText("神はあなたを愛しています")).toBeInTheDocument();
  });
});
