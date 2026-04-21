import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeader from "@/components/ui/SectionHeader";

describe("SectionHeader", () => {
  it("title を表示する", () => {
    render(<SectionHeader title="礼拝" />);
    expect(screen.getByText("礼拝")).toBeInTheDocument();
  });

  it("subtitle を表示する", () => {
    render(<SectionHeader title="礼拝" subtitle="毎週日曜日" />);
    expect(screen.getByText(/毎週日曜日/)).toBeInTheDocument();
  });

  it("subtitle が未指定の場合は表示しない", () => {
    render(<SectionHeader title="礼拝" />);
    expect(screen.queryByText("毎週日曜日")).not.toBeInTheDocument();
  });
});
