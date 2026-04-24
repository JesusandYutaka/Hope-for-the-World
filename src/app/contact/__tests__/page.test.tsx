import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ContactPage from "@/app/contact/page";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

beforeEach(() => {
  vi.clearAllMocks();
});

describe("ContactPage", () => {
  it("フォームのフィールドと送信ボタンが表示される", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText("お名前 *")).toBeInTheDocument();
    expect(screen.getByLabelText("メールアドレス *")).toBeInTheDocument();
    expect(screen.getByLabelText("お問合せ内容")).toBeInTheDocument();
    expect(screen.getByLabelText("日程・詳細")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "送信する" })).toBeInTheDocument();
  });

  it("fetch 成功時に「送信しました」メッセージを表示する", async () => {
    mockFetch.mockResolvedValue({ ok: true });
    const user = userEvent.setup();
    render(<ContactPage />);
    await user.type(screen.getByLabelText("お名前 *"), "山田太郎");
    await user.type(screen.getByLabelText("メールアドレス *"), "test@example.com");
    await user.click(screen.getByRole("button", { name: "送信する" }));
    await waitFor(() => {
      expect(screen.getByText("送信しました")).toBeInTheDocument();
    });
  });

  it("fetch 失敗時に role=alert のエラーメッセージを表示する", async () => {
    mockFetch.mockResolvedValue({ ok: false });
    const user = userEvent.setup();
    render(<ContactPage />);
    await user.type(screen.getByLabelText("お名前 *"), "テスト");
    await user.type(screen.getByLabelText("メールアドレス *"), "test@example.com");
    await user.click(screen.getByRole("button", { name: "送信する" }));
    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("送信に失敗しました");
    });
  });

  it("送信中はボタンが disabled で「送信中...」と表示される", async () => {
    let resolveRequest!: (value: { ok: boolean }) => void;
    mockFetch.mockReturnValue(new Promise<{ ok: boolean }>((r) => { resolveRequest = r; }));
    const user = userEvent.setup();
    render(<ContactPage />);
    await user.type(screen.getByLabelText("お名前 *"), "テスト");
    await user.type(screen.getByLabelText("メールアドレス *"), "test@example.com");
    await user.click(screen.getByRole("button", { name: "送信する" }));
    expect(screen.getByRole("button", { name: "送信中..." })).toBeDisabled();
    resolveRequest({ ok: true });
  });

  it("「もう一度送る」クリックでフォーム状態に戻る", async () => {
    mockFetch.mockResolvedValue({ ok: true });
    const user = userEvent.setup();
    render(<ContactPage />);
    await user.type(screen.getByLabelText("お名前 *"), "テスト");
    await user.type(screen.getByLabelText("メールアドレス *"), "test@example.com");
    await user.click(screen.getByRole("button", { name: "送信する" }));
    await waitFor(() => screen.getByText("もう一度送る"));
    await user.click(screen.getByText("もう一度送る"));
    expect(screen.getByRole("button", { name: "送信する" })).toBeInTheDocument();
  });
});
