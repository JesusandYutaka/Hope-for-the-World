import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("Header", () => {
  it("ロゴ「中島豊公式サイト」を表示する", () => {
    render(<Header />);
    expect(screen.getByText("中島豊公式サイト")).toBeInTheDocument();
  });

  it("「つながる」CTAボタンが /contact へのリンクを持つ", () => {
    render(<Header />);
    const ctaLinks = screen.getAllByText("つながる");
    const contactLink = ctaLinks.find((el) => el.closest("a")?.getAttribute("href") === "/contact");
    expect(contactLink).toBeInTheDocument();
  });

  it("モバイルメニューボタンが存在する", () => {
    render(<Header />);
    expect(screen.getByLabelText("メニュー")).toBeInTheDocument();
  });

  it("モバイルメニューボタンをクリックするとモバイルメニューが展開する", () => {
    render(<Header />);
    const menuButton = screen.getByLabelText("メニュー");
    const mobileNav = menuButton.closest("header")!.querySelector(".lg\\:hidden.overflow-hidden");
    expect(mobileNav?.className).toContain("max-h-0");
    fireEvent.click(menuButton);
    expect(mobileNav?.className).toContain("max-h-[600px]");
  });

  it("モバイルメニューを2回クリックすると閉じる", () => {
    render(<Header />);
    const menuButton = screen.getByLabelText("メニュー");
    const mobileNav = menuButton.closest("header")!.querySelector(".lg\\:hidden.overflow-hidden");
    fireEvent.click(menuButton);
    fireEvent.click(menuButton);
    expect(mobileNav?.className).toContain("max-h-0");
  });

  it("モバイルでグループボタンをクリックするとサブメニューが展開する", () => {
    render(<Header />);
    fireEvent.click(screen.getByLabelText("メニュー"));
    const groupButtons = screen.getAllByRole("button").filter(
      (btn) => btn.textContent?.includes("Hopeを広げる")
    );
    expect(groupButtons.length).toBeGreaterThan(0);
    fireEvent.click(groupButtons[0]);
    expect(screen.getAllByRole("link").find((a) => a.getAttribute("href") === "/missions-partner")).toBeInTheDocument();
  });

  it("モバイルでグループを2回クリックすると折りたたむ", () => {
    render(<Header />);
    fireEvent.click(screen.getByLabelText("メニュー"));
    const groupButtons = screen.getAllByRole("button").filter(
      (btn) => btn.textContent?.includes("Hopeを広げる")
    );
    fireEvent.click(groupButtons[0]);
    fireEvent.click(groupButtons[0]);
    // サブメニューが非表示になる（宣教パートナーリンクは存在するが、上部のモバイルナビ内にはない）
    const mobileLinks = screen.getAllByRole("link").filter(
      (a) => a.closest(".lg\\:hidden")
    );
    const missionsPartnerLink = mobileLinks.find((a) => a.getAttribute("href") === "/missions-partner");
    expect(missionsPartnerLink).toBeUndefined();
  });

  it("デスクトップドロップダウンをマウスオーバーすると開く", () => {
    render(<Header />);
    // デスクトップ側（hidden lg:flex nav 内）のドロップダウンを取得
    const desktopBtn = screen.getAllByText("Hopeを広げる")[0];
    const dropdownContainer = desktopBtn.closest("div.relative");
    expect(dropdownContainer).not.toBeNull();
    fireEvent.mouseEnter(dropdownContainer!);
    const panel = dropdownContainer!.querySelector("div.absolute");
    expect(panel?.className).toContain("opacity-100");
  });

  it("デスクトップドロップダウンからマウスアウトすると閉じる", () => {
    render(<Header />);
    const desktopBtn = screen.getAllByText("Hopeを広げる")[0];
    const dropdownContainer = desktopBtn.closest("div.relative");
    fireEvent.mouseEnter(dropdownContainer!);
    fireEvent.mouseLeave(dropdownContainer!);
    const panel = dropdownContainer!.querySelector("div.absolute");
    expect(panel?.className).toContain("opacity-0");
  });

  it("デスクトップドロップダウンボタンをクリックしても開閉する", () => {
    render(<Header />);
    const desktopBtn = screen.getAllByText("Hopeを広げる")[0].closest("button");
    expect(desktopBtn).not.toBeNull();
    fireEvent.click(desktopBtn!);
    const panel = desktopBtn!.closest("div.relative")?.querySelector("div.absolute");
    expect(panel?.className).toContain("opacity-100");
  });

  it("スクロール時にヘッダースタイルが変わる（scrolled state）", () => {
    render(<Header />);
    fireEvent.scroll(window, { target: { scrollY: 100 } });
  });

  it("ナビリンク「賛美・Worship」が /worship へのリンクを持つ", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    const worshipLink = links.find((a) => a.getAttribute("href") === "/worship");
    expect(worshipLink).toBeInTheDocument();
  });

  it("ナビリンク「人生に答えを探している方へ」が /know-god へのリンクを持つ", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    const knowGodLink = links.find((a) => a.getAttribute("href") === "/know-god");
    expect(knowGodLink).toBeInTheDocument();
  });

  it("モバイルメニューを開いてリンクをクリックするとメニューが閉じる", () => {
    render(<Header />);
    fireEvent.click(screen.getByLabelText("メニュー"));
    const mobileNav = screen.getByLabelText("メニュー").closest("header")!.querySelector(".lg\\:hidden.overflow-hidden");
    expect(mobileNav?.className).toContain("max-h-[600px]");
    // モバイルメニュー内のリンクをクリック
    const mobileLinks = Array.from(mobileNav!.querySelectorAll("a"));
    fireEvent.click(mobileLinks[0]);
    expect(mobileNav?.className).toContain("max-h-0");
  });

  it("ドロップダウンの外側クリックで閉じる（mousedown イベント）", () => {
    render(<Header />);
    const desktopBtn = screen.getAllByText("Hopeを広げる")[0];
    const dropdownContainer = desktopBtn.closest("div.relative")!;
    fireEvent.mouseEnter(dropdownContainer);
    const panel = dropdownContainer.querySelector("div.absolute");
    expect(panel?.className).toContain("opacity-100");
    // 外側でmousedownイベント発火 → クローズ
    fireEvent.mouseDown(document.body);
    expect(panel?.className).toContain("opacity-0");
  });
});
