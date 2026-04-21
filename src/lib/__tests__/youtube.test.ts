import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchLatestYouTubeVideo } from "@/lib/youtube";

const mockFetch = vi.fn();

beforeEach(() => {
  vi.stubGlobal("fetch", mockFetch);
  mockFetch.mockReset();
});

describe("fetchLatestYouTubeVideo", () => {
  it("fetch が失敗（例外）した場合は null を返す", async () => {
    mockFetch.mockRejectedValue(new Error("network error"));
    const result = await fetchLatestYouTubeVideo();
    expect(result).toBeNull();
  });

  it("レスポンスが ok でない場合は null を返す", async () => {
    mockFetch.mockResolvedValue({ ok: false });
    const result = await fetchLatestYouTubeVideo();
    expect(result).toBeNull();
  });

  it("videoId が含まれない XML の場合は null を返す", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      text: async () => "<feed><title>Channel</title></feed>",
    });
    const result = await fetchLatestYouTubeVideo();
    expect(result).toBeNull();
  });

  it("正常なレスポンスの場合は { id, title } を返す", async () => {
    const xml = `
      <feed>
        <title>Hope Channel</title>
        <entry>
          <yt:videoId>abc123xyz</yt:videoId>
          <title>最新の礼拝メッセージ</title>
        </entry>
      </feed>
    `;
    mockFetch.mockResolvedValue({ ok: true, text: async () => xml });
    const result = await fetchLatestYouTubeVideo();
    expect(result).toEqual({ id: "abc123xyz", title: "最新の礼拝メッセージ" });
  });
});
