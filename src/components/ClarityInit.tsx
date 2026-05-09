"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityInit({ clarityId }: { clarityId: string }) {
  useEffect(() => {
    Clarity.init(clarityId);
  }, [clarityId]);

  return null;
}
