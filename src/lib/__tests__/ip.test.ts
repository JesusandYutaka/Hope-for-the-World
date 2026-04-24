import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { getClientIp } from "@/lib/ip";

function makeReq(headers: Record<string, string> = {}): NextRequest {
  return new NextRequest("http://localhost/test", { headers });
}

describe("getClientIp", () => {
  it("x-real-ip があればそれを返す", () => {
    expect(getClientIp(makeReq({ "x-real-ip": "1.2.3.4" }))).toBe("1.2.3.4");
  });

  it("x-real-ip がなければ x-forwarded-for の最初の値を返す", () => {
    expect(getClientIp(makeReq({ "x-forwarded-for": "5.6.7.8, 9.10.11.12" }))).toBe("5.6.7.8");
  });

  it("x-real-ip が x-forwarded-for より優先される", () => {
    expect(
      getClientIp(makeReq({ "x-real-ip": "1.2.3.4", "x-forwarded-for": "5.6.7.8" }))
    ).toBe("1.2.3.4");
  });

  it("どちらもなければ 'anonymous' を返す", () => {
    expect(getClientIp(makeReq())).toBe("anonymous");
  });
});
